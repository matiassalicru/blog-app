import React from 'react'
// Types
import { IAlert } from './Alert.interface'
// Styles
import { SCContainer, SCIconContainer, SCAlertText } from './styles'

export const Alert: React.FC<IAlert> = ({ text, icon = null, variant = null, time = 2 }) => {
  return (
    <SCContainer variant={variant} animationTime={time} data-testid="alert-container">
      {icon && <SCIconContainer>{icon}</SCIconContainer>}
      <SCAlertText>{text}</SCAlertText>
    </SCContainer>
  )
}
