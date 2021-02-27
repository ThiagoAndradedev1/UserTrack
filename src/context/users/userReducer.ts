import { IUserState } from "../../models/userState";
import { USER_TYPES } from "../../constants/usersConstants";
import { Actions } from "./store";

export const userReducer: React.Reducer<IUserState, Actions> = (
  state: IUserState,
  action: Actions
) => {
  switch (action.type) {
    case USER_TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case USER_TYPES.CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        loading: false,
      };
    case USER_TYPES.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        loading: false,
      };
    case USER_TYPES.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      };
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        current: action.payload,
      };
    case USER_TYPES.CLEAR_CURRENT_USER:
      return {
        ...state,
        current: null,
      };
    case USER_TYPES.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case USER_TYPES.SET_ENDERECO:
      return { ...state, enderecoViaCep: action.payload };
    default:
      return state;
  }
};
