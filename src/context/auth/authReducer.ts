import { IAuthState } from "../../models/authState";
import { AUTH_TYPES } from "../../constants/authConstants";
import { Actions } from "./store";

export const authReducer: React.Reducer<IAuthState, Actions> = (
  state: IAuthState,
  action: Actions
) => {
  switch (action.type) {
    case AUTH_TYPES.LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
