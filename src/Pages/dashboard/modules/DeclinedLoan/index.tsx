import React from "react";
import DetailCard from "../../components/Card/DetailCard";
import { allLoans } from "../LoanStatus/dummyData";
import { Container } from "./decline.style";

const LoanStatus = () => {
  return (
    <Container>
      {allLoans.map((item, index) => (
        <DetailCard key={index} item={item} />
      ))}
    </Container>
  );
};

export default LoanStatus;
