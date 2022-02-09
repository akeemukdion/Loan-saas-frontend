interface IfieldInput {
  TransactionTrackingRef: string;
  LoanProductCode: string;
  CustomerID: string;
  LinkedAccountNumber: string;
  CollateralDetails: string;
  CollateralType: string;
  ComputationMode: number;
  Tenure: number;
  Moratorium: number;
  InterestAccrualCommencementDate: number;
  Amount: number;
  InterestRate: number;
  PrincipalPaymentFrequency: number;
  InterestPaymentFrequency: number;
}
export const createLoanForm = [
  {
    TransactionTrackingRef: "string",
    LoanProductCode: "string",
    CustomerID: "string",
    LinkedAccountNumber: "string",
    CollateralDetails: "string",
    CollateralType: "string",
    ComputationMode: 0,
    Tenure: 0,
    Moratorium: 0,
    InterestAccrualCommencementDate: "2022-02-03T10:55:44.031Z",
    Amount: 0,
    InterestRate: 0,
    PrincipalPaymentFrequency: 0,
    InterestPaymentFrequency: 0,
  },
  // {
  //   // id: "8",
  //   name: "BVN",
  //   type: "number",
  //   placeholder: "bank verification number",
  //   label: "Bank verification number(BVN)",
  //   errorMessage: "input valid bvn!  ",
  //   required: true,
  //   //   pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$£!%*#?&^_-]{8,20}$",
  // },
  {
    // id: "9",
    name: "TransactionTrackingRef",
    type: "text",
    placeholder: "transaction reference",
    label: "Transaction TrackingRef",
    errorMessage: "input valid Transaction TrackingRef",
    required: true,
    //   pattern: values.password,
  },
  {
    // id: "10",
    name: "LoanProductCode",
    type: "select",
    placeholder: "select loan type",
    label: "Product type",
    errorMessage: "select product type ",
    required: true,

    dataList: ["DEFF", "Federal", "UKD-Staff loan"],
    //   pattern: values.password,
  },
];
