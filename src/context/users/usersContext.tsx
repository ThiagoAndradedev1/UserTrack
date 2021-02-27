import { createContext } from "react";
import { IUserState } from "../../models/userState";

const userStateDefault: IUserState = {
  users: [],
  loading: false,
  error: "",
  current: null,
  endereco: null,
  getEndereco: () => {},
  getUsers: () => {},
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
  clearCurrent: () => {},
  currentUser: () => {},
};

const contactContext = createContext<IUserState>(userStateDefault);

export default contactContext;
