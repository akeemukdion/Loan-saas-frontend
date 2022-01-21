import CustomApi from "../helper/CustomApi";
// import * as userTypes from '../redux/reducers/employee/type';
// import {authenticate,isAuth} from '../helper/AuthHelper';
import { authenticate } from "../helper/AuthHelper";
import Swal from "sweetalert2";

export const logoutEmployee = async (data: {}) => {
  try {
    const response = await CustomApi.post("api/employee_logout", data);
    // console.log(response);
    Swal.fire(response.message);
  } catch (error: any) {
    console.log(error.message);
  }
};

// export const loginEmployeeService =  (data, setState, states, history) => async dispatch => {
//   try {
//     dispatch({type : userTypes.GET_EMPLOYEE_REQUEST});
//     await CustomApi.get('sanctum/csrf-cookie')
//     const response = await CustomApi.post('api/employee_login', data );
//     Swal.fire(response.message);
//     dispatch({ type : userTypes.GET_EMPLOYEE_SUCCESS, payload : response.data});
//     authenticate(response, () => {
//       setState({
//         ...states,
//         email:'',
//         password:''
//       });
//       isAuth() && isAuth().is_admin === 1 ? history.push('/dashboards/admin') : isAuth() && isAuth().is_admin !== 1 ?  history.push('/dashboards') : history.push('/');
//     });
//   } catch (error) {
//     console.log(error.message);
//     Swal.fire(error.message);
//     dispatch({type : userTypes.GET_EMPLOYEE_FAILURE, payload : error.message});
//   }
// };

export const getLoginEmployee = async () => {
  try {
    const response = await CustomApi.get("api/employeeByToken");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
