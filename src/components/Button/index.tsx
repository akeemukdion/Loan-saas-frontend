import React, { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { ButtonWrapper } from "./button.styles";

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  isLoading?: boolean;
  isCompleted?: boolean;
  xs?: boolean;
  small?: boolean;
  disabled?: boolean;
  children: ReactNode;
  colored?: boolean;
} & ComponentPropsWithoutRef<T>;
// type Props = {
//   children: ReactNode;
//   type?:"button" | "submit" | "reset";
//   onClick:(e:React.MouseEvent<HTMLButtonElement>) =>void;
//   colored?:boolean
// }

const Button = <T extends ElementType = "button">({
  // colored,
  children,
  ...otherProps
}: ButtonProps<T>): JSX.Element => {
  return (
    <ButtonWrapper
      // small
      // colored
      // className="customButton"
      {...otherProps}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
