
export interface IUser {
  name: string;
  image: string;
  email: string;
}

export interface ISessionProps {
  session: ISession
}

export interface ISession {
  expires: string;
  user: IUser
}

export interface IPost {
  title: string
  text: string
  topic: string
  user_id: number
  date: Date
  id: number
}
