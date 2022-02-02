import CustomApi from "../helper/CustomApi";
import * as userTypes from "../Store/actions/actionTypes";
// import {authenticate} from '../helper/AuthHelper';

// eslint-disable-next-line
import { authenticate, isAuth } from "../helper/AuthHelper";
import Swal from "sweetalert2";
import { Dispatch } from "redux";
import { NavigateFunction } from "react-router-dom";

// export const logoutEmployee = async (data: {}) => {
//   try {
//     const response = await CustomApi.post("api/employee_logout", data);
//     console.log(response);
//     // Swal.fire(response.message);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

export const loginEmployeeService =
  (
    data: {},
    setState: (arg: any) => void,
    states: {},
    navigate: NavigateFunction
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: userTypes.GET_USER });
      console.log("weeweewew");

      await CustomApi.get("sanctum/csrf-cookie");
      const response = await CustomApi.post("api/employee_login", data);
      // Swal.fire(response.message);
      dispatch({
        type: userTypes.GET_EMPLOYEE_SUCCESS,
        payload: response.data,
      });
      authenticate(response, () => {
        setState({
          ...states,
          email: "",
          password: "",
        });
        navigate("/dashboards/admin");
        //   isAuth() && isAuth().is_admin === 1 ? navigate('/dashboards/admin') : isAuth() && isAuth().is_admin !== 1 ?  navigate('/dashboards') : navigate('/');
      });
    } catch (error: any) {
      console.log(error.message);
      Swal.fire(error.message);
      dispatch({
        type: userTypes.GET_EMPLOYEE_FAILURE,
        payload: error.message,
      });
    }
  };

// export const getEmployeeService =  () => async dispatch => {
//   try {
//     dispatch({type : userTypes.GET_ALL_EMPLOYEE_REQUEST})
//     const response = await CustomApi.get('api/allemployees');
//     // Swal.fire(`Succesfully`);
//     console.log(response.data);
//     dispatch({ type : userTypes.GET_ALL_EMPLOYEE_SUCCESS, payload : response.data});
//   } catch (error) {
//     // Swal.fire(`can't create designation because${error.message}`);
//     dispatch({type : userTypes.GET_ALL_EMPLOYEE_FAILURE, payload : error.message});
//   }
// };
