// eslint-disable-next-line
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
type InputItem = {
  // id: string;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  errorMessage: string;
  required?: boolean;
  pattern?: string;
  options?: string[];
  dataList?: string[];
};

export const createLoanInput: InputItem[] = [
  {
    // id: "010",
    name: "CustomerID",
    type: "text",
    placeholder: "customer id",
    label: "Coustomer ID",
    errorMessage: "Field cannot be empty ",
    required: true,
    // pattern: "^[A-Za-z0-9]{2,18}$",
  },
  {
    // id: "2",
    name: "LinkedAccountNumber",
    type: "text",
    placeholder: "Account number",
    label: "Linked Account number",
    errorMessage: "field cannot be empty ",
    required: true,
    // pattern: "^[A-Za-z0-9]{3,18}$",
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
  {
    // id: "1",
    name: "Tenure",
    type: "text",
    placeholder: "loan tenure",
    label: "Tenure",
    errorMessage: "Field cannot be empty ",
    required: true,
    // pattern: "^[A-Za-z0-9]{2,18}$",
  },
  {
    // id: "4",
    name: "Moratorium",
    type: "text",
    placeholder: "Moratorium",
    label: "Moratorium",
    errorMessage: "select option applicable ",
    required: true,

    //   pattern: "^[A-Za-z0-9]{3,18}$",
  },
  {
    // id: "5",
    name: "Amount",
    type: "number",
    placeholder: "Amount",
    label: "Amount",
    errorMessage: "Amount applicable ",
    required: true,
    //   pattern: "^[A-Za-z0-9]{3,18}$",
  },
  {
    // id: "6",
    name: "InterestRate",
    type: "number",
    placeholder: "Interest Rate",
    label: "Interest Rate",
    errorMessage: "input valid rate",
    required: true,
  },
  {
    // id: "14",
    name: "PrincipalPaymentFrequency",
    type: "text",
    placeholder: "Principal Payment Frequency",
    label: "Principal Frequency",
    errorMessage: "input valid info",
    required: true,
  },
  // {
  //   // id: "7",
  //   name: "email",
  //   type: "email",
  //   placeholder: "enter email",
  //   label: "Email",
  //   errorMessage: "it should be valid email address",
  //   required: true,
  //   //   pattern:"^[A-Za-z0-9]{}"
  // },

  {
    // id: "9",
    name: "phone-number",
    type: "tel",
    placeholder: "enter  phone number",
    label: "Phone Number",
    errorMessage: "input valid Phone number",
    required: true,
    //   pattern: values.password,
  },

  {
    // id: "11",
    name: "loan_officer",
    type: "select",
    placeholder: "Loan officer",
    label: "Loan officer",
    errorMessage: "invalid input",
    required: true,
    dataList: [
      "Magdalene Itam- Masodje",
      "Chinonye Ofurum Victoria",
      "Matilda Diete-spiff",
    ],
    //   pattern: values.password,
  },
];
