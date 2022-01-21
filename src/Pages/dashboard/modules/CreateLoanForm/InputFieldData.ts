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
    name: "firstname",
    type: "text",
    placeholder: "Firstname",
    label: "Firstname",
    errorMessage: "Field cannot be empty ",
    required: true,
    pattern: "^[A-Za-z0-9]{2,18}$",
  },
  {
    // id: "2",
    name: "lastName",
    type: "text",
    placeholder: "surname",
    label: "Lastname",
    errorMessage:
      "Name should be 3-18 characters and shouldn't include any special characters!  ",
    required: true,
    pattern: "^[A-Za-z0-9]{3,18}$",
  },
  {
    // id:"3",
    name: "otherName",
    type: "text",
    placeholder: "other name",
    label: "Othername",
    errorMessage:
      "username should be 3-18 characters and shouldn't include any special characters!  ",
    // required: true,
    // pattern: "^[A-Za-z0-9]{3,18}$",
  },
  {
    // id: "1",
    name: "title",
    type: "text",
    placeholder: "Title",
    label: "Title",
    errorMessage: "Field cannot be empty ",
    required: true,
    // pattern: "^[A-Za-z0-9]{2,18}$",
  },
  {
    // id: "4",
    name: "gender",
    type: "select",
    placeholder: "Select gender",
    label: "Gender",
    errorMessage: "select option applicable ",
    required: true,
    options: ["Female", "Male"],
    //   pattern: "^[A-Za-z0-9]{3,18}$",
  },
  {
    // id: "5",
    name: "marital_status",
    type: "select",
    placeholder: "select marital status",
    label: "Marital status",
    errorMessage: "select option applicable ",
    required: true,
    options: ["single", "married", "Divorced", "Widowed", "Seperated"],
    //   pattern: "^[A-Za-z0-9]{3,18}$",
  },
  {
    // id: "6",
    name: "date_of_birth",
    type: "date",
    placeholder: "enter date",
    label: "Date of birth",
    errorMessage: "input valid date",
    required: true,
  },
  {
    // id: "14",
    name: "place _of_birth",
    type: "text",
    placeholder: "enter place of birth",
    label: "Place of birth",
    errorMessage: "input valid info",
    required: true,
  },
  {
    // id: "7",
    name: "email",
    type: "email",
    placeholder: "enter email",
    label: "Email",
    errorMessage: "it should be valid email address",
    required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },

  {
    // id: "8",
    name: "BVN",
    type: "number",
    placeholder: "bank verification number",
    label: "Bank verification number(BVN)",
    errorMessage: "input valid bvn!  ",
    required: true,
    //   pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$£!%*#?&^_-]{8,20}$",
  },
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
    // id: "10",
    name: "product_type",
    type: "select",
    placeholder: "select loan type",
    label: "Product type",
    errorMessage: "select product type ",
    required: true,

    dataList: ["DEFF", "Federal", "UKD-Staff loan"],
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
  {
    // id: "12",
    name: "nationality",
    type: "text",
    placeholder: "Nationality",
    label: "Nationality",
    errorMessage: "input valid info",
    required: true,
    //   pattern: values.password,
  },
  {
    // id: "13",
    name: "address",
    type: "text",
    placeholder: "contact Address",
    label: "Address",
    errorMessage: "input valid address",
    required: true,
    //   pattern: values.password,
  },
];

export const nextOfKinInfo: InputItem[] = [
  {
    // id:"1",
    name: "next_of_kin",
    type: "text",
    placeholder: "Full Name",
    label: "Next of Kin",
    errorMessage: "Name required",
    required: true,
  },
  {
    // id: "2",
    name: "kin_relationship",
    type: "text",
    placeholder: "Relationship with kin",
    label: "Relationshp with next of kin",
    errorMessage: "field empty",
    // required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id: "5",
    name: "kin_date_of_birth",
    type: "date",
    label: "Date of Birth",
    errorMessage: "",
    required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id: "6",
    name: "next_of_kin_address",
    type: "text",
    placeholder: "Next of Kin address",
    label: "Permanent Address",
    errorMessage: "it should be valid address",
    required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id: "7",
    name: "kin_email",
    type: "email",
    placeholder: "enter email",
    label: "Email",
    errorMessage: "it should be valid email address",
    required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id: "4",
    name: "kin_phone_number",
    type: "tel",
    placeholder: "enter Phone number",
    label: "Phone Number",
    errorMessage: "it should be valid phone number",
    required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
];
export const workInformation: InputItem[] = [
  {
    // id:"1",
    name: "work_place",
    type: "text",
    placeholder: "company name",
    label: "Place of work",
    errorMessage: "field required",
    required: true,
  },
  {
    // id: "2",
    name: "portfolio",
    type: "text",
    placeholder: "work position",
    label: "Position",
    errorMessage: "field empty",
    // required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id: "3",
    name: "work_address",
    type: "text",
    placeholder: "workplace address",
    label: "Work Address",
    errorMessage: "field empty",
    // required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id:"4",
    name: "work_state",
    type: "text",
    placeholder: "state",
    label: "State",
    errorMessage: "field empty",
    // required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
];
