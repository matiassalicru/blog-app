import { ReactElement } from 'react'
import { IconsProps } from '../../icons/icons.interface'

export interface IAlertContext {
  show: boolean
  variant: string
  time: number
  icon: ReactElement<IconsProps> | null
}
