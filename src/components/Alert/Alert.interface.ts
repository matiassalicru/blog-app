import { ReactElement } from 'react'
import { IconsProps } from '../../icons/icons.interface'

export interface IAlert {
  text: string
  variant?: string
  time?: number
  icon?: ReactElement<IconsProps>
}

export interface IAlertStyles {
  variant?: string | null
  animationTime?: number
}
