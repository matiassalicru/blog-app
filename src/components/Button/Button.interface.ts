type ButtonVariants = 'danger' | 'primary' | 'secondary' 


export interface IButton {
  onClick: () => void
  text: string
  disabled?: boolean
  variant?: ButtonVariants
}

export interface IButtonStyles {
  variant?: ButtonVariants
}