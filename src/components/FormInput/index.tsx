import { useState } from "react";
import * as Style from "./input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  borderColor?: boolean;
  errorMessage?: string;
  focused?: string;
  list?: string;
  dataList?: string[];
}
export const FormInput: React.FC<InputProps> = ({
  label,
  onChange,
  focused,
  borderColor,
  errorMessage,
  ...otherProp
}) => {
  //eslint-disable-next-line
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
        borderColor={borderColor}
        onFocus={() => otherProp.name === "confirmPassword" && setFocused(true)}
        // onFocus={ Object.keys(Obj)[Object.keys(Obj).length-1  }
        {...otherProp}
        // focused={onFocused.toString()}
      />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </Style.Wrapper>
  );
};

export const FormInputWithDatalist: React.FC<InputProps> = ({
  label,
  onChange,
  focused,
  borderColor,
  errorMessage,
  dataList,
  list,
  ...otherProp
}) => {
  //eslint-disable-next-line
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
        list={list}
        id="stafflist"
        {...otherProp}
      />
      <datalist id={list}>
        {dataList?.map((opt, key) => (
          <option key={key} value={opt} />
        ))}
      </datalist>
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </Style.Wrapper>
  );
};
