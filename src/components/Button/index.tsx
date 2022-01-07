import React from "react";
import { ButtonWrapper } from "./button.styles";


type Props = {
  text?: string;
  type?:"button" | "submit" | "reset";
  onClick:(e:React.MouseEvent<HTMLButtonElement>) =>void;
  colored?:boolean
}

const Button:React.FC<Props> = ({ children, colored, ...otherProps }) => {
  return (
    <ButtonWrapper
      // className="customButton"
      {...otherProps}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;