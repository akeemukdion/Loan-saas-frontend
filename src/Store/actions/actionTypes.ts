export const GET_USER = "GET_USER";
export const SET_LOADING = "SET_LOADING";
export const ON_SUCCESS = "ON_SUCCESS";
export const AUTH_FAIL = "AUTH_ERROR";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILURE = "GET_EMPLOYEE_FAILURE";

export interface GetUser {
  type: typeof GET_USER;
  payload: UserSuccess;
}
export interface SetLoading {
  type: typeof SET_LOADING;
}
export interface GetEmployee {
  type: typeof GET_EMPLOYEE_SUCCESS;
}

export interface AuthError {
  type: typeof AUTH_FAIL;
}
export type userPayload = {
  email: string;
  password: string;
};
export type UserSuccess = {
  token: string;
  data: {
    name: string;
    id: string;
    level: number;
  };
};
export interface OnSuccess {
  type: typeof ON_SUCCESS;
  //   payload: UserSuccess;
}
export type userDispatchTypes = GetUser | AuthError | SetLoading | OnSuccess;
