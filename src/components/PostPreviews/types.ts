export interface IPosts {
  id: number
  _id?: string
  date?: Date
  user_id?: number
  title?: string
  text?: string
}

export interface IUser {
  _id: string
  name: string
  email: string
  image: string
  emailVerified?: any
}
