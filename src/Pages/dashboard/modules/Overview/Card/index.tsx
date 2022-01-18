import React from "react";
import ViewDetailsBTN from "../../../../../components/Button/index";
import * as Styled from "./overview_card.style";
type Loanprops = {
  item: {
    title: string;
    status?: string;
    totalNumber?: string;
  };
};

const OverviewCard: React.FC<Loanprops> = ({ item }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{item.title}</Styled.Title>
      <Styled.TotalNumber status={item.status}>
        <p className="icon_holder">
          {" "}
          {item.totalNumber ? (
            <i className="fa fa-database"></i>
          ) : (
            // <i>{item.totalNumber}</i>
            <i className="fa fa-graph">&#xf200;</i>
          )}
        </p>
        <h4>{item.totalNumber}</h4>
      </Styled.TotalNumber>
      {/* {item.status && (
        <ViewDetailsBTN xs onClick={() => "were"}>
          Details
        </ViewDetailsBTN>
      )} */}
    </Styled.Wrapper>
  );
};

export default OverviewCard;
