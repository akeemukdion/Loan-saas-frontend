import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/Navigationbar/index";
import CreateLoanForm from "./modules/CreateLoanForm";
// import LoginForm from "../Login";
import SideBarNav from "./components/sidebar";
import styles from "./style.module.css";

const DashboardOverview = lazy(() => import("./modules/Overview"));
const LoanStatus = lazy(() => import("./modules/LoanStatus"));
const RequestLoan = lazy(() => import("./modules/RequestLoan"));
const OfferLetter = lazy(() => import("./modules/OfferLetter/OfferLetter"));

const Dashboard = (props) => {
  const navigate = useNavigate();
const [isSidebarOpen, setisSidebarOpen] = useState(false)
  return (
    <div className={styles.layout}>
      <SideBarNav isOpen={isSidebarOpen} />
      <main className={styles.main}>
        <NavBar handleNav={setisSidebarOpen}/>
        <div className={styles.viewPoint}>
          <p onClick={() => navigate(-1)}>Back</p>
          <p>Welcome, {props.userName ? props.userName : "Admin"}</p>
        </div>
        <div className={styles.mainView}>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/create-loan" element={<CreateLoanForm />} />
              <Route path="/overview" element={<DashboardOverview />} />
              <Route path="/loan-status" element={<LoanStatus />} />
              <Route path="/loan-request" element={<RequestLoan />} />
              <Route path="/offer-letter" element={<OfferLetter />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
