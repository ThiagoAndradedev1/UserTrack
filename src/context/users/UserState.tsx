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
    getUsers: () => {},
    addUser: () => {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = async () => {
    try {
      const res = await Users.list();
      dispatch({ type: USER_TYPES.GET_USERS_LOADED, payload: res });
    } catch (error) {
      // dispatch({ type: USER_TYPES.GET_USERS_ERROR, error: "Error" });
    }
  };

  const addUser = async () => {
    const res = await Users.create({
      nome: "Rafael",
      cpf: "",
      email: "rafael@gmail.com",
    });
    // dispatch({ type: USER_TYPES.GET_USERS_LOADED, payload: res });
  };

  return (
    <ContactContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        error: state.error,
        getUsers,
        addUser,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default UserState;
