import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
type Props = {
  children: ReactNode;
  user: {};
};
const PrivateRoute = ({ children }: Props) => {
  // eslint-disable-next-line
  const storeState = useSelector((state: RootState) => state.authUser["data"]);

  const user = localStorage.getItem("user");
  const location = useLocation();
  if (!user) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
