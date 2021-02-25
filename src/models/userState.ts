import { IUser } from "./user";

export interface IUserState {
  users: IUser[] | IUser | string;
  loading: boolean;
  error: string;
}
