import React from "react";
import * as Styled from "./overview_card.style";
type Loanprops = {
  item: {
    id?: number;
    title: string;
    status?: string;
    totalNumber?: string | number;
    totalAmount?: string;
  };
};

const OverviewCard: React.FC<Loanprops> = ({ item }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <span>{item.title}</span>
        <span>
          {item.totalAmount && (
            <i
              style={{ color: "lightsalmon", fontSize: "20px" }}
              className=" fa fa-graph"
            >
              &#xf200;
            </i>
          )}
        </span>
      </Styled.Title>
      <Styled.TotalNumber status={item.status}>
        <p className="icon_holder">
          {!item.totalAmount && <i className="fa fa-database"></i>}
        </p>
        {item.totalAmount ? (
          <h4>&#8358; {item.totalAmount}</h4>
        ) : (
          <h4>{item.totalNumber}</h4>
        )}
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
