import { createContext } from "react";
import { IAuthState } from "../../models/authState";

const userStateDefault: IAuthState = {
  authenticated: false,
  loading: false,
  login: () => {},
  logout: () => {},
};

const contactContext = createContext<IAuthState>(userStateDefault);

export default contactContext;
