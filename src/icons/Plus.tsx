import { ReactElement } from 'react'
import { IconsProps } from './icons.interface'

const iconType = {
  regular:
    'M15.5 9H11V4.5C11 4.25 10.75 4 10.5 4H9.5C9.21875 4 9 4.25 9 4.5V9H4.5C4.21875 9 4 9.25 4 9.5V10.5C4 10.7812 4.21875 11 4.5 11H9V15.5C9 15.7812 9.21875 16 9.5 16H10.5C10.75 16 11 15.7812 11 15.5V11H15.5C15.75 11 16 10.7812 16 10.5V9.5C16 9.25 15.75 9 15.5 9Z',
  solid:
    'M15.1429 8.71429H11.2857V4.85714C11.2857 4.40179 10.8839 4 10.4286 4H9.57143C9.08929 4 8.71429 4.40179 8.71429 4.85714V8.71429H4.85714C4.375 8.71429 4 9.11607 4 9.57143V10.4286C4 10.9107 4.375 11.2857 4.85714 11.2857H8.71429V15.1429C8.71429 15.625 9.08929 16 9.57143 16H10.4286C10.8839 16 11.2857 15.625 11.2857 15.1429V11.2857H15.1429C15.5982 11.2857 16 10.9107 16 10.4286V9.57143C16 9.11607 15.5982 8.71429 15.1429 8.71429Z',
}
export function Plus({
  color = 'rgba(0, 0, 0, 0.9)',
  className = '',
  width = '24px',
  height = '24px',
  variant = 'regular',
}: IconsProps): ReactElement {
  return (
    <svg data-testid="plus-icon" width={width} height={height} className={className} viewBox="0 0 20 20">
      <g id="PlusIcon" stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <path d={iconType[variant]} fill={color} fillRule="nonzero" />
      </g>
    </svg>
  )
}
