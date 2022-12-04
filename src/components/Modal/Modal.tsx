import React from 'react'
// Components
import { Button } from '../Button/Button'
// Styles
import { SCModalButtons, SCModalContainer, SCModalText, SCModalBackdrop, SCModalTitle } from './styles'
// Types
import { IModal } from './Modal.interface'

export const Modal: React.FC<IModal> = ({
  text,
  title = 'Title',
  onSubmit,
  onCancel,
  submitButtonVariant = 'danger',
}) => {
  return (
    <>
      <SCModalContainer>
        <SCModalTitle>{title}</SCModalTitle>
        <SCModalText data-testid="text-content">{text}</SCModalText>
        <SCModalButtons>
          <Button onClick={onSubmit} text="Delete" variant={submitButtonVariant} />
          <Button onClick={onCancel} text="Cancel" variant="secondary" />
        </SCModalButtons>
      </SCModalContainer>
      <SCModalBackdrop onClick={onCancel} data-testid="modal-backdrop" />
    </>
  )
}
