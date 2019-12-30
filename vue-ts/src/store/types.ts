// 注意一下，可选或者必选选项 不然检测会报错
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
  book?: object;
  user?: User;
  error?: Boolean
}