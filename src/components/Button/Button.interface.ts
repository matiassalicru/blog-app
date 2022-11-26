import { ReactElement } from 'react';
// Types
import { IconsProps } from 'src/icons/icons.interface';
export type ButtonVariants = 'danger' | 'primary' | 'secondary' | 'roundedIcon'

export interface IButton {
  onClick: () => void
  text?: string
  disabled?: boolean
  variant?: ButtonVariants
  icon?: ReactElement<IconsProps>
  onlyIcon?: boolean
}

export interface IButtonStyles {
  variant?: ButtonVariants
  onlyIcon?: boolean
}