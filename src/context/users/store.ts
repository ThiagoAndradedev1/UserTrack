import { USER_TYPES } from "../../constants/usersConstants";
import { IUser } from "../../models/user";
import { IViaCep } from "../../models/via-cep";

interface GetUsers {
  type: USER_TYPES.GET_USERS;
  payload: IUser[];
}

interface CreateUser {
  type: USER_TYPES.CREATE_USER;
  payload: IUser;
}

interface UpdateUser {
  type: USER_TYPES.UPDATE_USER;
  payload: IUser;
}

interface DeleteUser {
  type: USER_TYPES.DELETE_USER;
  payload: number;
}

interface SetCurrent {
  type: USER_TYPES.SET_CURRENT_USER;
  payload: IUser;
}

interface ClearCurrent {
  type: USER_TYPES.CLEAR_CURRENT_USER;
}

interface UserError {
  type: USER_TYPES.USER_ERROR;
  payload: string;
}

interface UserLoading {
  type: USER_TYPES.USER_LOADING;
}

interface SetCurrentAddress {
  type: USER_TYPES.SET_ENDERECO;
  payload: IViaCep;
}

export const setUsers = (res: IUser[]): GetUsers => {
  return { type: USER_TYPES.GET_USERS, payload: res };
};

export const setCreateUser = (res: IUser): CreateUser => {
  return { type: USER_TYPES.CREATE_USER, payload: res };
};

export const setUpdateUser = (res: IUser): UpdateUser => {
  return { type: USER_TYPES.UPDATE_USER, payload: res };
};

export const setDeleteUser = (id: number): DeleteUser => {
  return { type: USER_TYPES.DELETE_USER, payload: id };
};

export const setCurrentUser = (user: IUser): SetCurrent => {
  return { type: USER_TYPES.SET_CURRENT_USER, payload: user };
};

export const clearCurrentUser = (): ClearCurrent => {
  return { type: USER_TYPES.CLEAR_CURRENT_USER };
};

export const setUserLoading = (): UserLoading => {
  return { type: USER_TYPES.USER_LOADING };
};

export const setUserError = (error: string): UserError => {
  return { type: USER_TYPES.USER_ERROR, payload: error };
};

export const setViaCep = (endereco: IViaCep): SetCurrentAddress => {
  return { type: USER_TYPES.SET_ENDERECO, payload: endereco };
};

export type Actions =
  | GetUsers
  | CreateUser
  | UpdateUser
  | DeleteUser
  | UserError
  | UserLoading
  | SetCurrent
  | ClearCurrent
  | SetCurrentAddress;
