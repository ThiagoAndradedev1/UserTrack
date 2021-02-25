import { USER_TYPES } from "../../constants/usersConstants";
import { IUser } from "../../models/user";

interface GetUsersLoading {
  type: USER_TYPES.GET_USERS_LOADING;
}

interface GetUsersCompleted {
  type: USER_TYPES.GET_USERS_COMPLETED;
  payload: IUser[];
}

interface GetUsersError {
  type: USER_TYPES.GET_USERS_ERROR;
  payload: string;
}

interface CreateUserLoading {
  type: USER_TYPES.CREATE_USER_LOADING;
}

interface CreateUserCompleted {
  type: USER_TYPES.GET_USERS_COMPLETED;
  payload: IUser[];
}

interface CreateUserError {
  type: USER_TYPES.CREATE_USER_ERROR;
  payload: string;
}

export const setGetUsersLoading = () => {
  return { type: USER_TYPES.GET_USERS_COMPLETED };
};

export const setGetUsersCompleted = (res: IUser[]) => {
  return { type: USER_TYPES.GET_USERS_COMPLETED, payload: res };
};

export const setGetUsersError = (error: string) => {
  return { type: USER_TYPES.GET_USERS_COMPLETED, payload: error };
};

export type Actions = GetUsersCompleted | GetUsersLoading | GetUsersError;
