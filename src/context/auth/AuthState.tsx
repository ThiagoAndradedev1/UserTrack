import React, { useReducer } from "react";
import AuthContext from "./authContext";
import { IAuthState } from "../../models/authState";
import { authReducer } from "./authReducer";
import { setAuthLoading, setAuthLogin, setAuthLogout } from "./store";

const UserState: React.FC = (props) => {
  const initialState: IAuthState = {
    loading: false,
    authenticated: false,
    login: () => {},
    logout: () => {},
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async () => {
    dispatch(setAuthLoading());
    dispatch(setAuthLogin());
  };

  const logout = async () => {
    dispatch(setAuthLoading());
    dispatch(setAuthLogout());
  };

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        authenticated: state.authenticated,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default UserState;
