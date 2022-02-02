import React from "react";
import { FormInput } from "../../../../components/FormInput/index";
import UserCallToAction from "./component/Dropdown/dropdown";
import * as Style from "./navbar.style";

const CallToAction = ({ toggleOnClick }) => {
  return (
    <Style.NavWrapper className="Navcontainer">
      <span onClick={toggleOnClick} className="toggleIcon_onMobile">
        &#9776;
      </span>
      <div className="navItems">
        <div className="navSearch">
          <FormInput type="search" placeholder="search here" borderColor />
        </div>
        <div className="navItemGroup">
          <i className="fa fa-bell" />
          <UserCallToAction />
        </div>
      </div>
    </Style.NavWrapper>
  );
};

export default CallToAction;
