import React, { useReducer } from "react";
import AuthContext from "./authContext";
import { authReducer } from "./authReducer";
import {
  LOG_IN, 
  LOG_OUT
} from "../../constants/authConstants";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = () => {
    dispatch({ type: LOG_IN });
  };

  const logout = () => {
    dispatch({ type: LOG_OUT });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;