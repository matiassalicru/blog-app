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
  disableButtons = false,
  submitButtonVariant = 'danger',
}) => {
  return (
    <>
      <SCModalContainer>
        <SCModalTitle>{title}</SCModalTitle>
        <SCModalText data-testid="modal-text-content">{text}</SCModalText>
        <SCModalButtons>
          <Button onClick={onSubmit} text="Delete" variant={submitButtonVariant} disabled={disableButtons} />
          <Button onClick={onCancel} text="Cancel" variant="secondary" disabled={disableButtons} />
        </SCModalButtons>
      </SCModalContainer>
      <SCModalBackdrop onClick={onCancel} data-testid="modal-backdrop" disabled={disableButtons} />
    </>
  )
}
