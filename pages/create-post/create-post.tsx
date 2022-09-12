import React from 'react'
import { useRouter } from 'next/router'

// Types
import { NextPage } from 'next'

// Components
import { Button } from 'components/Button/Button'
import { SCNewPostContainer } from './styles'
import { Input } from 'components/Input/Input'

const CreatePost: NextPage = () => {
  const router = useRouter()
  return (
    <SCNewPostContainer>
      <Button onClick={() => router.back()} text='Volver' />
      <Input type='text' placeholder='This is the title' />
    </SCNewPostContainer>
  )
}

export default CreatePost
