import { createContext } from "react";
import { IUserState } from "../../models/userState";

const contactContext = createContext<IUserState | null>(null);

export default contactContext;
