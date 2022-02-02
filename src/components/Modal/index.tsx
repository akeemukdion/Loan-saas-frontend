import React, { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import * as Style from "./modal.style";
/**
 * Custom modal component
 */

type Props = {
  Open: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ Open, children, onClose }) => {
  if (!Open) return null;
  return ReactDOM.createPortal(
    <Fragment>
      <Style.ModalOverlay onClick={() => onClose()} />
      <Style.ContentWrapper>
        {onClose && (
          <Style.CloseBTN onClick={() => onClose()}>
            <Style.CloseIcon>X</Style.CloseIcon>
            {/* <img src="./icons/closeBTN.svg" alt="close" width="20px" /> */}
          </Style.CloseBTN>
        )}
        {children}
      </Style.ContentWrapper>
    </Fragment>,
    document.getElementById("modalPortal") as HTMLElement
  );
};

export default Modal;
