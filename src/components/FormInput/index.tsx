import { useState } from "react";
import * as Style from "./input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errorMessage?: string;
  focused?: string;
}
const FormInput: React.FC<InputProps> = ({
  label,
  onChange,
  focused,
  errorMessage,
  ...otherProp
}) => {
  const [onFocused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  return (
    <Style.Wrapper>
      {label && (
        <label className="inputLabel" htmlFor={label}>
          {label}
        </label>
      )}
      <Style.Input
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => otherProp.name === "confirmPassword" && setFocused(true)}
        // onFocus={ Object.keys(Obj)[Object.keys(Obj).length-1  }
        {...otherProp}
        // focused={onFocused.toString()}
      />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </Style.Wrapper>
  );
};

export default FormInput;
