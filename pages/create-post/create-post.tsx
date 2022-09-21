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
import useSWR from 'swr'

const CreatePost: NextPage = () => {
  const { back } = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const { data: lastPostId } = useSWR(`../api/get-last-post`, fetcher)

  const onSubmitPost = async () => {
    fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          title: title,
          text: description,
          topic: 'Test',
          user_id: 123,
          date: new Date(),
          id: lastPostId + 1,
        },
      }),
    }).then(() => {
      setTitle('')
      setDescription('')
    })
  }

  return (
    <SCNewPostContainer>
      <Button onClick={() => back()} text='Volver' />
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
        <Button onClick={onSubmitPost} text='POST' />
      </SCButtonArea>
    </SCNewPostContainer>
  )
}

export default CreatePost
