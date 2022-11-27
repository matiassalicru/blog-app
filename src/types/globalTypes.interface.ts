import { DefaultSession } from "next-auth";

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession['user']
  }
}

export interface IPost {
  title: string
  text: string
  topic: string
  user_id: string
  date: Date
  id: number
}
