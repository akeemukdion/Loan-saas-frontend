import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/dashboard/index";
import ErrorPage from "../Pages/ErrorPage/error.tsx";
import LoginForm from "../Pages/Login";
import PrivateRoute from "../PrivateRouteComponent";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default PageRoutes;
