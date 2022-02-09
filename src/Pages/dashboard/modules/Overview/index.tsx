// import React from "react";
import { Link } from "react-router-dom";
import OverviewCard from "./Card";
import { breakdownOverview, getLoansOverview } from "./dummyData";
import * as Styled from "./overview.style";
import DisbursedLoan from "./Piechart";

const DashboardOverview = () => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.BreakdownWrapper>
          <div className="three-column-grid">
            {breakdownOverview.map((data, idx) => (
              <OverviewCard key={idx} item={data} />
            ))}
          </div>
          {/* <div>
            <DisbursedLoan />
            <p>Total Disbursed loans</p>
          </div> */}
        </Styled.BreakdownWrapper>

        <div className="four-column-grid">
          {getLoansOverview.map((data, idx) => (
            <Link key={idx} to={data.title.replace(/\s/g, "")}>
              <OverviewCard item={data} />
            </Link>
          ))}
        </div>
      </Styled.Wrapper>
      {/* <Outlet /> */}
    </>
  );
};

export default DashboardOverview;
