import React, { useReducer } from "react";
import ContactContext from "./usersContext";
import Users from "../../api/agent";
import { IUserState } from "../../models/userState";
import { userReducer } from "./userReducer";
import {
  setUsers,
  setCreateUser,
  setDeleteUser,
  setUpdateUser,
  setCurrentUser,
  clearCurrentUser,
  setUserError,
  setUserLoading,
} from "./store";
import { IUser } from "../../models/user";

const UserState: React.FC = (props) => {
  const initialState: IUserState = {
    users: [],
    loading: false,
    error: "",
    current: null,
    getUsers: () => {},
    addUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
    currentUser: () => {},
    clearCurrent: () => {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = async () => {
    try {
      dispatch(setUserLoading());
      const res = await Users.list();
      dispatch(setUsers(res));
    } catch (error) {
      dispatch(setUserError("Erro ao tentar retornar lista de usuários."));
    }
  };

  const addUser = async () => {
    try {
      dispatch(setUserLoading());
      const res = await Users.create({
        nome: "Maria12",
        cpf: "",
        email: "rafael@gmail.com",
      });
      dispatch(setCreateUser(res));
    } catch (error) {
      dispatch(setUserError("Erro ao tentar criar usuário."));
    }
  };

  const updateUser = async () => {
    try {
      dispatch(setUserLoading());

      const res = await Users.update({
        id: 6,
        nome: "Chico",
        cpf: "21313131",
        email: "rafael@gmail.com",
      });
      dispatch(setUpdateUser(res));
    } catch (error) {
      dispatch(setUserError("Erro ao tentar atualizar o usuário."));
    }
  };

  const deleteUser = async (id: number) => {
    try {
      dispatch(setUserLoading());
      await Users.delete(id);
      dispatch(setDeleteUser(id));
    } catch (error) {
      dispatch(setUserError("Erro ao tenta deletar o usuário."));
    }
  };

  const currentUser = (user: IUser) => {
    dispatch(setCurrentUser(user));
  };

  const clearCurrent = () => {
    dispatch(clearCurrentUser());
  };

  return (
    <ContactContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        error: state.error,
        current: state.current,
        getUsers,
        addUser,
        updateUser,
        deleteUser,
        currentUser,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default UserState;
