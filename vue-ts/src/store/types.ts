// types.ts
export interface RootState {
  version: string;
  coder: string;
}
export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export interface ProfileState {
  user?: User;
  error: boolean;
}