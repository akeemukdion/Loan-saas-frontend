import React from "react";
import { Link } from "react-router-dom";
import OverviewCard from "./Card";
import { getLoansOverview } from "./dummyData";
import * as Stlyed from "./overview.style";

const DashboardOverview = () => {
  return (
    <Stlyed.Wrapper>
      <div className="three-column-grid">
        {getLoansOverview.map((data, idx) => (
          <Link to={data.title.replace(/\s/g, "")}>
            <OverviewCard key={idx} item={data} />
          </Link>
        ))}
      </div>
    </Stlyed.Wrapper>
  );
};

export default DashboardOverview;
