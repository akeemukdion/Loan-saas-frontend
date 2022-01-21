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

    console.log(userData);
  };

  return (
    <Style.Wrapper>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <fieldset>
          <legend>Application Form:</legend>
          <div className="three-column-grid">
            {createLoanInput.map((item, key) =>
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

            {/* {createLoanForm} */}
          </div>
        </fieldset>
        <section>
          <fieldset>
            <legend>Next of Kin: </legend>
            <div className="three-column-grid">
              {nextOfKinInfo.map((item, key) =>
                item.type === "select" ? (
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
            (item, key) => (
              //  item.type === "select" ? (
              //     <SelectInput key={key}label={item.label} optItem={item.options} />
              //   ) : (
              <FormInput
                key={key}
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
