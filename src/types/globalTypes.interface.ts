
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