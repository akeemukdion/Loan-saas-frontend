import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/Navigationbar/index";
import CreateLoanForm from "./modules/CreateLoanForm";
import Preloader from "../../components/Preloader/index";
import SideBarNav from "./components/sidebar";
import * as Style from "./dashboard.style";
import DataTable from "./components/DataTable";
const DashboardOverview = lazy(() => import("./modules/Overview"));
const LoanStatus = lazy(() => import("./modules/LoanStatus"));
const DeclinedLoan = lazy(() => import("./modules/DeclinedLoan"));
const OfferLetter = lazy(() => import("./modules/OfferLetter/OfferLetter"));

interface Props {
  userName?: string;
}

const Dashboard: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const showSiderbarClick = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  return (
    <Style.LayoutWrapper>
      <SideBarNav isOpen={isSidebarOpen} />
      <main className="main">
        <NavBar toggleOnClick={showSiderbarClick} />
        <div className="viewPoint">
          <p onClick={() => navigate(-1)}>Back</p>
          <p>Welcome, {props.userName ? props.userName : "Admin"}</p>
        </div>
        <div className="mainView">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/create-loan" element={<CreateLoanForm />} />
              <Route path="/overview" element={<DashboardOverview />} />
              <Route path="/loan-status" element={<LoanStatus />} />
              <Route path="/overview" element={<DashboardOverview />} />
              <Route path="/overview/Allloans" element={<DataTable />} />
              <Route path="/overview/LoansonQueue1" element={<DataTable />} />
              <Route path="/overview/LoansonQueue2" element={<DataTable />} />
              <Route
                path="/overview/LoansAwaitingApproval"
                element={<DataTable />}
              />
              <Route path="/overview/ProcessedLoans" element={<DataTable />} />
              <Route
                path="/overview/DeclinedLoans"
                element={<DeclinedLoan />}
              />
              <Route path="/declinedrequest" element={<DeclinedLoan />} />
              <Route path="/offer-letter" element={<OfferLetter />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </Style.LayoutWrapper>
  );
};

export default Dashboard;
