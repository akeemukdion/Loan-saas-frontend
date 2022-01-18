import React from "react";
import { Link, Outlet } from "react-router-dom";
import OverviewCard from "./Card";
import { getLoansOverview } from "./dummyData";
import * as Stlyed from "./overview.style";

const DashboardOverview = () => {
  return (
    <>
      <Stlyed.Wrapper>
        <div className="three-column-grid">
          {getLoansOverview.map((data, idx) => (
            <Link key={idx} to={data.title.replace(/\s/g, "")}>
              <OverviewCard item={data} />
            </Link>
          ))}
        </div>
      </Stlyed.Wrapper>
      <Outlet />
    </>
  );
};

export default DashboardOverview;
