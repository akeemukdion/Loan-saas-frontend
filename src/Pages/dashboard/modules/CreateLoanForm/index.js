import React from "react";
// import PropTypes from "prop-types";
import { createLoanInput, nextOfKinInfo, workInformation } from "./InputFieldData";
// import  from "./create.module.css";
import FormInput from "../../../../components/FormInput/index";
import SelectInput from "../../../../components/SelectInput";
import UploadInput from "../../../../components/FileUpload";
import CreateBTN from '../../../../components/Button'
import { Wrapper } from "./create.style";

const CreateLoan = (props) => {
  // const createLoanForm = ()=>{
  //     inputField.map(item =>(
  //         item.type === "select" ?
  //      <SelectInput key={item.id} optItem={item} /> : <FormInput type={item.type} placeholder={item.placeholder} {...item} />
  //     ))
  // }
  return (
    <Wrapper >
      <form >
          <fieldset>
          <legend>Application Form:</legend>
        <div className="three-column-grid">
          {createLoanInput.map((item,index) =>
            item.type === "select" ? (
              <SelectInput key={item.id}label={item.label} optItem={item.options} />
            ) : (
              <FormInput
              key={item.id}
                type={item.type}
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
          <legend >Next of Kin: </legend>
          <div className="three-column-grid">
          {nextOfKinInfo.map((item,index)=>
           item.type === "select" ? (
              <SelectInput key={item.id}label={item.label} optItem={item.options} />
            ) : (
              <FormInput
              key={index}
                type={item.type}
                placeholder={item.placeholder}
                {...item}
              />
            )
          )}
          </div>
          
        </fieldset>
        </section>
        
          <fieldset className="three-column-grid" >
          <legend>Work Information: </legend>
          {workInformation.map((item)=>
          //  item.type === "select" ? (
          //     <SelectInput key={item.id}label={item.label} optItem={item.options} />
          //   ) : (
              <FormInput
              key={item.id}
                type={item.type}
                placeholder={item.placeholder}

                {...item}
              />
            // )
          )}
        </fieldset>
       
        <section>
          <fieldset>
          <legend >Upload Relevant Documents:</legend>
          <UploadInput/>
        </fieldset>
        </section>
        <div className="createBTN" >
          <CreateBTN colored onClick={()=>"clicked"} style={{width:"200px"}} >
                create
            </CreateBTN>
        </div>
      </form>
    </Wrapper>
  );
};

// CreateLoan.propTypes = {};

export default CreateLoan;
