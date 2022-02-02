import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
// import recruiterReducer from "./recruiterReducer";
// import talentReducer from "./talentReducer";

const rootReducer = combineReducers({
  authUser: authReducer,
  // recruiterData: recruiterReducer,
  // talentUser: talentReducer,
});
export default rootReducer;
// export type State = ReturnType<typeof rootReducer>;
