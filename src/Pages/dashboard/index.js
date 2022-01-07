import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../dashboard/components/Navigationbar/index";
import CreateLoanForm from "../dashboard/modules/CreateLoanForm";
// import LoginForm from "../Login";
import SideBarNav from "./components/sidebar";
import styles from "./style.module.css";


const LoanStatus = lazy(() => import("./modules/LoanStatus"));
const RequestLoan = lazy(() => import("./modules/RequestLoan"));
const OfferLetter = lazy(() => import("./modules/OfferLetter/OfferLetter"));

const Dashboard = (props) => {

const navigate = useNavigate()

  return (
    <div className={styles.layout}>
      <SideBarNav />
      <main className={styles.main}>
          <NavBar />
          <div className={styles.viewPoint}>
            <p onClick={()=>navigate(-1)} >Back</p>
            <p>Welcome, {props.userName ? props.userName : "Admin"}</p>
        </div>
        <div className={styles.mainView}>
       
        <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/create-loan" element={<CreateLoanForm />} />
          <Route path="/loan-status" element={<LoanStatus/>} />
          <Route path="/loan-request" element={<RequestLoan/>} />
          <Route path="/offer-letter" element={<OfferLetter />} />
        </Routes>
          </Suspense> 
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
