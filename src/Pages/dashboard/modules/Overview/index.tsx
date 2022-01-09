import React from "react";
import OverviewCard from "./Card";
import { getLoansOverview } from "./dummyData";
import * as Stlyed from "./overview.style";

const DashboardOverview = () => {
  return (
    <Stlyed.Wrapper>
      <Stlyed.ProductOverview className="three-column-grid">
        {getLoansOverview.map((data, idx) =>
          data.product ? <OverviewCard key={idx} item={data} /> : null
        )}
      </Stlyed.ProductOverview>
      <div className="thre-column-grid">
        {getLoansOverview.map((data, idx) =>
          !data.product ? <OverviewCard key={idx} item={data} /> : null
        )}
      </div>
    </Stlyed.Wrapper>
  );
};

export default DashboardOverview;
