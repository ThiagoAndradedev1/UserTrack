import { IUserState } from "../../models/userState";
import { IUser } from "../../models/user";
import { USER_TYPES } from "../../constants/usersConstants";

type Action = {
  payload: IUser[] | IUser;
  error?: string;
  type: USER_TYPES;
};

export const userReducer: React.Reducer<IUserState, Action> = (
  state: IUserState,
  action: Action
) => {
  switch (action.type) {
    case USER_TYPES.GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.GET_USERS_LOADED:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case USER_TYPES.GET_USERS_ERROR:
      return {
        ...state,
        error: action.error ?? "",
        loading: false,
      };
    default:
      return state;
  }
};
