import { IAddress } from "./address";
import { IUser } from "./user";

export interface IUserState {
  users: IUser[];
  loading: boolean;
  error: string;
  current: IUser | null;
  endereco: IAddress | null;
  getEndereco: Function;
  getUsers: Function;
  addUser: Function;
  updateUser: Function;
  deleteUser: Function;
  currentUser: Function;
  clearCurrent: Function;
}
