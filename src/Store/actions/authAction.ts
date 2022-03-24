import CustomApi from "../../helper/CustomApi";
import { Dispatch } from "react";
import {
  userDispatchTypes,
  userPayload,
  SET_LOADING,
  GET_USER,
  AUTH_FAIL,
  // ON_SUCCESS,
} from "./actionTypes";
// import { NavigateFunction, useNavigate } from "react-router-dom";

export const logoutEmployee = async (data: {}) => {
  // const navigate = useNavigate()
  try {
    const response = await CustomApi.post("api/employee_logout", data);
    console.log(response);
    // navigate("/dashboard/overview");
    // Swal.fire(response.message);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getUser =
  (data: userPayload, callbackFN: () => void) =>
  async (dispatch: Dispatch<userDispatchTypes>) => {
    dispatch({ type: SET_LOADING });
    try {
      //   await CustomApi.get("sanctum/csrf-cookie");
      const response = await CustomApi.post("api/user/login", data);
      // window.localStorage.setItem("user", response.data.body);
      dispatch({ type: GET_USER, payload: response.data.body });
      // callbackFN();
    } catch (err) {
      dispatch({ type: AUTH_FAIL });
      callbackFN();
      window.localStorage.setItem("user", "data");
    }
  };
