import React from "react";
import Card from "../../components/ViewLoanCard";
import { dummyData } from "./data";
import * as Style from "./view.style";
import ActionBTN from "../../../../helper/AcceptRejectShared";

type Props = {};

const ViewLoan: React.FC<Props> = () => {
  return (
    <div>
      <Card dummyData={dummyData} />
      <Style.ActionWrapper>
        <ActionBTN />
      </Style.ActionWrapper>
    </div>
  );
};

export default ViewLoan;
