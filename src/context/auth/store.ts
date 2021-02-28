import { AUTH_TYPES } from "../../constants/authConstants";

interface AuthLoading {
  type: AUTH_TYPES.LOADING;
}

interface AuthLogin {
  type: AUTH_TYPES.LOGIN;
}

interface AuthLogout {
  type: AUTH_TYPES.LOGOUT;
}

export const setAuthLoading = (): AuthLoading => {
  return { type: AUTH_TYPES.LOADING };
};

export const setAuthLogin = (): AuthLogin => {
  return { type: AUTH_TYPES.LOGIN };
};

export const setAuthLogout = (): AuthLogout => {
  return { type: AUTH_TYPES.LOGOUT };
};

export type Actions = AuthLoading | AuthLogin | AuthLogout;
