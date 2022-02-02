//import/no-anonymous-default-export
import {
  SET_LOADING,
  GET_USER,
  userDispatchTypes,
  AUTH_FAIL,
} from "../actions/actionTypes";

// interface GetUserAction {
//   type: "GET_USER";
//   payload: {};
// }

interface DefaultState {
  loading: boolean;
  data?: {
    token: string;
    name: string;
    id: string;
    level: number;
  };
}

const initialState: DefaultState = {
  loading: false,
  data: {
    token: "",
    name: "",
    id: "",
    level: 0,
  },
};

export const authReducer = (
  state = initialState,
  action: userDispatchTypes
) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_USER:
      console.log(action.payload);
      return { ...state, data: action.payload, loading: false };
    case AUTH_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
