import React from 'react'
import { Button } from '../Button/Button'
import { SCModalButtons, SCModalContainer, SCModalText, SCModalBackdrop } from './styles'


interface IModal {
  text: string
  onClick?: () => void
}

export const Modal = ({text, onClick = () => true}: IModal) => {
  return (
    <SCModalBackdrop>
      <SCModalContainer>
        <SCModalText>{text}</SCModalText>
        <SCModalButtons>
          <Button onClick={onClick} text='Accept' />
          <Button onClick={onClick} text='Cancel' variant='danger' />
        </SCModalButtons>
      </SCModalContainer>
    </SCModalBackdrop>
  )
}
