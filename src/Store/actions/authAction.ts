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
  (data: userPayload) => async (dispatch: Dispatch<userDispatchTypes>) => {
    console.log(data);
    // if (Cookies.get("accessToken" || token)) {
    //   setAuthToken(Cookies.get("accessToken"));
    // }
    dispatch({ type: SET_LOADING });
    try {
      //   setLoading();

      //   await CustomApi.get("sanctum/csrf-cookie");
      const response = await CustomApi.post("api/user/login", data);
      dispatch({ type: GET_USER, payload: response.data.body });
    } catch (err) {
      dispatch({ type: AUTH_FAIL });
      //   dispatch({ type: SET_LOADING });
      // console.log({ type: AUTH_ERROR });
    }
  };
