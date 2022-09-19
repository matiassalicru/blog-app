import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Types
import { NextPage } from 'next'

// Components
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'

// Styles
import { SCNewPostContainer, SCButtonArea } from '../../styles/create-post/styles'

const CreatePost: NextPage = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const submitPost = async () => {
    await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        post: {
          title: title,
          text: description,
          topic: 'Test',
          user_id: 123,
          date: new Date()
          // Add ID to posts, may broke DB if I dont add this.
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setTitle('')
      setDescription('')
    })

  }

  return (
    <SCNewPostContainer>
      <Button onClick={() => router.back()} text='Volver' />
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
        <Button onClick={submitPost} text='POST' />
      </SCButtonArea>
    </SCNewPostContainer>
  )
}

export default CreatePost
