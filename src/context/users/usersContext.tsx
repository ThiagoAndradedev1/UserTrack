import { createContext } from "react";
import { IUserState } from "../../models/userState";

const userStateDefault: IUserState = {
  users: [],
  loading: false,
  error: "",
  getUsers: () => {},
  addUser: () => {},
};

const contactContext = createContext<IUserState>(userStateDefault);

export default contactContext;
