import React, { useState } from "react";
import {
  createLoanInput,
  nextOfKinInfo,
  workInformation,
} from "./InputFieldData";
import Preloader from "../../../../components/Preloader/index";
import FormInput from "../../../../components/FormInput/index";
import SelectInput from "../../../../components/SelectInput";
import UploadInput from "../../../../components/FileUpload";
import CreateBTN from "../../../../components/Button";
import * as Style from "./create.style";
import Swal from "sweetalert2";

type Createloanstate = {};

type Props = {};
const CreateLoan: React.FC<Props> = (props) => {
  const [userData, setUserData] = useState<Createloanstate>({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      Swal.fire("Loan created!");
      setLoading(false);
    }, 1500);

    // console.log(userData);
  };

  return (
    <Style.Wrapper>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <fieldset>
          <legend>Application Form:</legend>
          <div className="three-column-grid">
            {createLoanInput.map((item, index) =>
              item.type === "select" ? (
                <SelectInput
                  key={index}
                  name={item.name}
                  label={item.label}
                  handleChange={handleFormChange}
                  optItem={item.options}
                />
              ) : (
                <FormInput
                  key={index}
                  onChange={handleFormChange}
                  // type={item.type}
                  placeholder={item.placeholder}
                  {...item}
                />
              )
            )}
            {/* <input list="browsers" name="browser" id="browser" />
            <datalist id="browsers">
              <option value="Akeem" />
              <option value="Ifeoluwa" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist> */}
            {/* {createLoanForm} */}
          </div>
        </fieldset>
        <section>
          <fieldset>
            <legend>Next of Kin: </legend>
            <div className="three-column-grid">
              {nextOfKinInfo.map((item, index) =>
                item.type === "select" ? (
                  <SelectInput
                    key={index}
                    name={item.name}
                    label={item.label}
                    handleChange={handleFormChange}
                    optItem={item.options}
                  />
                ) : (
                  <FormInput
                    key={index}
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
            (item, index) => (
              //  item.type === "select" ? (
              //     <SelectInput key={index}label={item.label} optItem={item.options} />
              //   ) : (
              <FormInput
                key={index}
                // type={item.type}
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
            <UploadInput />
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
