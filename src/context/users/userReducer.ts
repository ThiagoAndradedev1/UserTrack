import { IUserState } from "../../models/userState";
import { IUser } from "../../models/user";
import { USER_TYPES } from "../../constants/usersConstants";

interface ActionUser {
  type: USER_TYPES.GET_USERS_COMPLETED;
  payload: IUser[];
}

interface ActionError {
  type: USER_TYPES.GET_USERS_ERROR;
  payload: string;
}

export const setActionUser = (res: IUser[]) => {
  return { type: USER_TYPES.GET_USERS_COMPLETED, payload: res };
};

type Actions = ActionUser | ActionError;

export const userReducer: React.Reducer<IUserState, Actions> = (
  state: IUserState,
  action: Actions
) => {
  switch (action.type) {
    case USER_TYPES.GET_USERS_COMPLETED:
      return {
        ...state,
        users: action.payload,
      };
    case USER_TYPES.GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // case USER_TYPES.GET_USERS_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case USER_TYPES.GET_USERS_COMPLETED:
    //   return {
    //     ...state,
    //     users: action.payload,
    //     loading: false,
    //   };
    // case USER_TYPES.GET_USERS_ERROR:
    //   return {
    //     ...state,
    //     error: action.error ?? "",
    //     loading: false,
    //   };
    default:
      return state;
  }
};
