import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Types
import { NextPage } from 'next'

// Components
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'

// Styles
import {
  SCNewPostContainer,
  SCButtonArea,
} from '../../styles/create-post/styles'

// Utils
import { isValidFormat } from 'src/utils/utils'
import api from 'src/services/api'

// Auth
import { signIn, useSession } from 'next-auth/react'
interface IPost {
  title: string
  text: string
  topic: string
  user_id: number
  date: Date
  id: number
}

const CreatePost: any = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { status } = useSession()

  useEffect(() => {
    setIsAuthenticated(status === 'authenticated')
  }, [status])

  const onSubmitPost = async () => {
    const { data: lastPostId } = await api.get('/posts/get-last-post')

    if (isValidFormat(title, description, lastPostId)) {
      const post: IPost = {
        title,
        text: description,
        topic: 'Test',
        user_id: 123,
        date: new Date(),
        id: lastPostId + 1,
      }
      const {
        data: { acknowledged },
      } = await api.post('/posts', { post })

      if (await acknowledged) {
        // TODO: Create a better alert
        alert('se creó el post con éxito')
      }

      setTitle('')
      setDescription('')
    } else {
      alert('error')
    }
  }

  if (!isAuthenticated) {
    return (
      <SCNewPostContainer>
        Sign in to create a new post
        <SCButtonArea>
          <Button onClick={() => signIn('github')} text='Sign in' />
        </SCButtonArea>
      </SCNewPostContainer>
    )
  }

  return (
    <SCNewPostContainer>
      <Button onClick={() => router.push('/')} text='Volver' />
      <Input
        type='text'
        placeholder='Write a shiny title'
        value={title}
        onChange={(e) => setTitle(e?.target?.value)}
      />
      <Textarea
        placeholder='Write your thoughts here'
        value={description}
        onChange={(e) => setDescription(e?.target?.value)}
      />
      <SCButtonArea>
        <Button
          onClick={onSubmitPost}
          text='POST'
          disabled={title.length < 1 || description.length < 2}
        />
      </SCButtonArea>
    </SCNewPostContainer>
  )
}

export default CreatePost
