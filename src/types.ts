export type { AuthInfo, AuthPayload, User, UserInput }

type AuthPayload = { id: string; role: 'user' }

type AuthInfo =
  | { isAuth: true; payload: AuthPayload }
  | { isAuth: false; payload: null }

type User = {
  id: string
  createdAt: string
  email: string
  isActive: boolean
  isDeleted: boolean
  name: string
  updatedAt: string
}

type UserInput = {
  email: string
  name: string
}
