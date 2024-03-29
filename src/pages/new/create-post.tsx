import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Types
import { NextPage } from 'next'
import { IPost } from 'src/types/globalTypes.interface'

// Utils
import { isValidFormat } from 'src/utils/utils'
// Requests
import { createNewPost, getLastPostId } from 'src/services/requests'
// Auth
import { signIn, useSession } from 'next-auth/react'
// Constants
import { AUTHENTICATED, GITHUB_SIGN_IN, HOME_PATH } from 'src/utils/contants'
// Components
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'
// Styles
import { SCNewPostContainer, SCButtonArea } from '../../styles/create-post/styles'
// Context
import { AlertContext } from '../../context/AlertContext/AlertContext'
import { IAlertContext } from '../../context/AlertContext/AlertContext.interface'

const CreatePost: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { setAlertInfo } = useContext(AlertContext)
  const { status, data: userData } = useSession()

  useEffect(() => {
    setIsAuthenticated(status === AUTHENTICATED)
  }, [status])

  if (!isAuthenticated) {
    return (
      <SCNewPostContainer>
        Sign in to create a new post
        <SCButtonArea>
          <Button onClick={() => signIn(GITHUB_SIGN_IN)} text="Sign in" />
        </SCButtonArea>
      </SCNewPostContainer>
    )
  }

  const onSubmitPost = async () => {
    const lastPostId = await getLastPostId()

    if (isValidFormat(title, description, lastPostId) && isAuthenticated && userData?.user) {
      const { user } = userData
      const post: IPost = {
        title,
        text: description,
        topic: 'Test',
        user_id: user.id,
        date: new Date(),
        id: lastPostId + 1,
      }

      const newPostIsCreated = await createNewPost(post)

      if (newPostIsCreated) {
        setAlertInfo((prev: IAlertContext) => ({
          ...prev,
          show: true,
          variant: 'primary',
          text: 'The post has been created succesfully',
        }))
      }

      setTitle('')
      setDescription('')
      router.push('/')
    } else {
      setAlertInfo((prev: IAlertContext) => ({
        ...prev,
        show: true,
        variant: 'danger',
        text: 'Something wrong happened',
      }))
    }
  }

  return (
    <SCNewPostContainer>
      <Button onClick={() => router.push(HOME_PATH)} text="Volver" />
      <Input type="text" placeholder="Write a shiny title" onChange={value => setTitle(value)} />
      <Textarea placeholder="Write your thoughts here" onChange={value => setDescription(value)} />
      <SCButtonArea>
        <Button onClick={onSubmitPost} text="POST" disabled={title.length < 1 || description.length < 2} />
      </SCButtonArea>
    </SCNewPostContainer>
  )
}

export default CreatePost
