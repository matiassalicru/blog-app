import React from 'react'
// Components
import { Button } from '../Button/Button'
// Styles
import {
  SCModalButtons,
  SCModalContainer,
  SCModalText,
  SCModalBackdrop,
  SCModalTitle,
} from './styles'
// Types
import { IModal } from './Modal.interface'

export const Modal = ({
  text,
  title = 'Title',
  onSubmit,
  onCancel,
  submitButtonVariant = 'danger',
}: IModal) => {
  return (
    <>
      <SCModalContainer>
        <SCModalTitle>{title}</SCModalTitle>
        <SCModalText>{text}</SCModalText>
        <SCModalButtons>
          <Button
            onClick={onSubmit}
            text='Delete'
            variant={submitButtonVariant}
          />
          <Button onClick={onCancel} text='Cancel' variant='secondary' />
        </SCModalButtons>
      </SCModalContainer>
      <SCModalBackdrop onClick={onCancel} />
    </>
  )
}
