import { ReactElement } from 'react'
import { IconsProps } from '../../icons/icons.interface'

type AlertVariant = 'primary' | 'secundary' | 'danger' | null

export interface IAlert {
  text: string
  variant?: AlertVariant
  time?: number
  icon?: ReactElement<IconsProps>
}

export interface IAlertStyles {
  variant?: string | null
  animationTime?: number
}
