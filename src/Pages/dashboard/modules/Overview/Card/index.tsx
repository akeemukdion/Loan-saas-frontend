import React from "react";
import ViewDetailsBTN from "../../../../../components/Button/index";
import * as Styled from "./overview_card.style";
type Loanprops = {
  item: {
    title: string;
    product?: string;
    total_Amount: string;
    totalNumber?: number;
  };
};

const OverviewCard: React.FC<Loanprops> = ({ item }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{item.title}</Styled.Title>
      <Styled.AmountWrapper product={item.product}>
        <p className="icon_holder">
          {" "}
          {item.totalNumber ? (
            <i className="fa fa-database"></i>
          ) : (
            // <i>{item.totalNumber}</i>
            <i className="fa fa-graph">&#xf200;</i>
          )}
        </p>
        <h4>{item.total_Amount}</h4>
      </Styled.AmountWrapper>
      {item.product && (
        <ViewDetailsBTN xs onClick={() => "were"}>
          Details
        </ViewDetailsBTN>
      )}
      <div>{}</div>
    </Styled.Wrapper>
  );
};

export default OverviewCard;
