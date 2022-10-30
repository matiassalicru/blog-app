import React, { useState } from 'react'
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

interface IPost {
  title: string
  text: string
  topic: string
  user_id: number
  date: Date
  id: number
}

const CreatePost: NextPage = () => {
  const { push } = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

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

  return (
    <SCNewPostContainer>
      <Button onClick={() => push('/')} text='Volver' />
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
