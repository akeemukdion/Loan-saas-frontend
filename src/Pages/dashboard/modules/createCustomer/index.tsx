import React, { Fragment, useState } from "react";
import {
  createLoanInput,
  nextOfKinInfo,
  workInformation,
} from "./InputFieldData";
import Preloader from "../../../../components/Preloader/index";
import {
  FormInput,
  FormInputWithDatalist,
} from "../../../../components/FormInput/index";
import SelectInput from "../../../../components/SelectInput";
import UploadInput from "../../../../components/FileUpload";
import CreateBTN from "../../../../components/Button";
import * as Style from "./create.style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

type Createloanstate = {};

type Props = {};
const CreateLoan: React.FC<Props> = (props) => {
  const [userData, setUserData] = useState<Createloanstate>({});
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState(true);
  // const [bvn, setBvn] = useState("");
  const navigate = useNavigate();
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      Swal.fire("Customer created!");
      navigate("/dashboard/create-loan", { replace: true });
      setLoading(false);
    }, 1500);

    // console.log(userData);
  };
  const verifyBVN = () => {
    // if (userData) {
    setEditable(false);
    // }
  };

  return (
    <Style.Wrapper>
      <div className="bvn_wrapper">
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
      </div>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <fieldset>
          <legend>Create customer Form:</legend>
          <div className="three-column-grid">
            {createLoanInput.map((item: any, key: number) =>
              item.dataList ? (
                <Fragment key={key}>
                  <FormInputWithDatalist
                    onChange={handleFormChange}
                    list={item.name}
                    label={item.label}
                    disabled={editable}
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
                  disabled={editable}
                  placeholder={item.placeholder}
                  {...item}
                />
              )
            )}

            {/* {createLoanForm} */}
          </div>
        </fieldset>
        <section>
          <fieldset>
            <legend>Next of Kin: </legend>
            <div className="three-column-grid">
              {nextOfKinInfo.map((item: any, key: number) =>
                item.type === "select" ? (
                  <SelectInput
                    key={key}
                    name={item.name}
                    label={item.label}
                    disabled={editable}
                    handleChange={handleFormChange}
                    optItem={item.options}
                  />
                ) : (
                  <FormInput
                    key={key}
                    disabled={editable}
                    // type={item.type}
                    onChange={handleFormChange}
                    placeholder={item.placeholder}
                    {...item}
                  />
                )
              )}
            </div>
          </fieldset>
        </section>

        <fieldset className="three-column-grid">
          <legend>Work Information: </legend>
          {workInformation.map(
            (item: any, key: number) => (
              //  item.type === "select" ? (
              //     <SelectInput key={key}label={item.label} optItem={item.options} />
              //   ) : (
              <FormInput
                key={key}
                // type={item.type}
                disabled={editable}
                onChange={handleFormChange}
                placeholder={item.placeholder}
                {...item}
              />
            )
            // )
          )}
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

// CreateLoan.propTypes = {};

export default CreateLoan;
