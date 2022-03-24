import React, { Fragment, useState } from "react";
import { createLoanInput } from "./inputFieldData";
import Preloader from "../../../../components/Preloader/index";
import {
  FormInput,
  FormInputWithDatalist,
} from "../../../../components/FormInput/index";
import SelectInput from "../../../../components/SelectInput";
import UploadInput from "../../../../components/FileUpload";
import CreateBTN from "../../../../components/Button";
import * as Style from "./loanform.style";
import Swal from "sweetalert2";

type Createloanstate = {};

type Props = {};
const LoanForm: React.FC<Props> = (props) => {
  const [userData, setUserData] = useState<Createloanstate>({
    Tenure: "",
    LoanProductCode: "",
    CustomerID: "",
    LinkedAccountNumber: "",
    Moratorium: "",
    InterestAccrualCommencementDate: "",
    Amount: "",
    InterestRate: "",
    PrincipalPaymentFrequency: "",
  });
  const [loading, setLoading] = useState(false);
  // const [bvn, setBvn] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };

  // const handleReset = () => {
  //   Array.from(document.querySelectorAll("input")).forEach(
  //     (input) => (input.value = "")
  //   );
  //   console.log("emi ni", userData);
  // };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      Swal.fire("Loan Application submitted!");
      setLoading(false);
    }, 1500);
  };

  return (
    <Style.Wrapper>
      {/* <div className="bvn_wrapper">
        <div className="two-column-grid">
          <FormInput
            name="bankVerificationNumber"
            type="number"
            onChange={handleFormChange}
            style={{ width: "400px", marginRight: "15px" }}
            // label="Bank verification Number"
            placeholder="Please provide Bank verification number "
          />
          <CreateBTN
            colored
            style={{ width: "250px" }}
            onClick={() => verifyBVN()}
          >
            Verify BVN to proceed
          </CreateBTN>
        </div>
      </div> */}
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <fieldset>
          <legend>Application Form:</legend>
          <div className="three-column-grid">
            {createLoanInput.map((item: any, key: number) =>
              item.dataList ? (
                <Fragment key={key}>
                  <FormInputWithDatalist
                    onChange={handleFormChange}
                    list={item.name}
                    label={item.label}
                    dataList={item.dataList}
                    name={item.name}
                    key={key}
                  />
                  {/* <datalist id={item.name}>
                    {item.dataList?.map((opt, key) => (
                      <option key={key} value={opt} />
                    ))}
                  </datalist> */}
                </Fragment>
              ) : item.type === "select" ? (
                <SelectInput
                  key={key}
                  name={item.name}
                  label={item.label}
                  handleChange={handleFormChange}
                  optItem={item.options}
                />
              ) : (
                <FormInput
                  key={key}
                  onChange={handleFormChange}
                  // type={item.type}
                  placeholder={item.placeholder}
                  {...item}
                />
              )
            )}

            {/* {LoanForm} */}
          </div>
        </fieldset>
        <section>
          <fieldset>
            <legend>Upload Relevant Documents:</legend>
            <div className="fileWrapper">
              <UploadInput />
              <UploadInput />
              <UploadInput />
            </div>
          </fieldset>
        </section>
        <div className="createBTN">
          <CreateBTN colored style={{ width: "200px" }} disabled={loading}>
            {loading ? <Preloader /> : "create"}
          </CreateBTN>
        </div>
      </form>
    </Style.Wrapper>
  );
};

export default LoanForm;
