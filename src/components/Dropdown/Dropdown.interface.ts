export interface IOptions {
  id: string
  name: string
  onClick: () => void
}

export interface IDropdown {
  options: IOptions[]
}

export interface SCDropdownTypes {
  isL1Open: boolean
}
