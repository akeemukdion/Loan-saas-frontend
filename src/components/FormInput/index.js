import PropTypes from 'prop-types'
import { useState } from "react";
// import { FormWrapper } from './input.styles';
import styles from "./styles.module.css";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
//   name:string,
//   label:string,
//   errorMessage:string,
//   focused?:boolean,
//   bordercolor:boolean
// }
// const FormInput:React.FC<InputProps> = ({ label,onChange,focused, errorMessage,bordercolor, ...otherProp }) => {

const FormInput = ({ label, errorMessage,bordercolor, onChange, ...otherProp }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  return (
    <div>
      {label && <label className={styles.inputLabel}htmlFor={label} >{label}</label>}
      <input
        className={`${styles.inputField} ${bordercolor ? styles.bordercolor : null }`}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => otherProp.name === "confirmPassword" && setFocused(true)}
        // onFocus={ Object.keys(Obj)[Object.keys(Obj).length-1  }
        {...otherProp}
        focused={focused.toString()}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};


FormInput.propTypes = {
    hdjh:PropTypes.string,
    }
export default FormInput;