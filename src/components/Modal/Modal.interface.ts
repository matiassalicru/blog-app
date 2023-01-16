import { ButtonVariants } from '../Button/Button.interface'

export interface IModal {
  text: string
  title?: string
  onCancel: () => void
  onSubmit: () => void
  submitButtonVariant?: ButtonVariants
  disableButtons?: boolean
}

export interface IModalBackdrop {
  disabled: boolean
}
