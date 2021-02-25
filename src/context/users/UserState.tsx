import React, { useReducer } from "react";
import ContactContext from "./usersContext";
import { IUserState } from "../../models/userState";
import { USER_TYPES } from "../../constants/usersConstants";
import Users from "../../api/agent";
import { userReducer } from "./userReducer";

const UserState: React.FC = (props) => {
  const initialState: IUserState = {
    users: [],
    loading: false,
    error: "",
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = async () => {};

  return (
    <ContactContext.Provider
      value={{ users: state.users, loading: state.loading, error: state.error }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default UserState;
