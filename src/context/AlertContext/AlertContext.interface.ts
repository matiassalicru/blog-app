import { ReactElement } from 'react'
import { IconsProps } from '../../icons/icons.interface'

type AlertVariant = 'primary' | 'secundary' | 'danger' | null

export interface IAlertContext {
  show: boolean
  variant: AlertVariant
  time: number
  icon: ReactElement<IconsProps> | null
}
