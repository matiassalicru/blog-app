import React from 'react'
import { useRouter } from 'next/router'

// Types
import { NextPage } from 'next'

// Components
import { Button } from 'components/Button/Button'
import { SCNewPostContainer, SCButtonArea } from './styles'
import { Input } from 'components/Input/Input'
import { Textarea } from 'components/Textarea/Textarea'

const CreatePost: NextPage = () => {
  const router = useRouter()

  const submitPost = () => {
    
  }

  return (
    <SCNewPostContainer>
      <Button onClick={() => router.back()} text='Volver' />
      <Input type='text' placeholder='Set a shiny title' />
      <Textarea placeholder='Write here' />
      <SCButtonArea>
        <Button onClick={() => true} text='POST' />
      </SCButtonArea>
    </SCNewPostContainer>
  )
}

export default CreatePost
