import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./dropdown.style";
import userAvatar from "../../../../../../assets/avatar.png";
/**
 * This is a user to call action button displays the username with a dropdown menulist
 */
type Props = {
  username?: string;
  logOutUser?: () => void;
  // userDetails?:
};
const CallToActionBTN: React.FC<Props> = ({ username, logOutUser }) => {
  const [hideDropdownItem, setHideDropdownItem] = useState(false);
  const showDropDownItem = () => {
    setHideDropdownItem(!hideDropdownItem);
  };

  const navigate = useNavigate();
  // const { pathname } = useLocation();

  const logOut = () => {
    console.log("ghsjhd");
    navigate("/");
  };
  return (
    <div style={{ position: "relative" }}>
      <Style.Wrapper onClick={showDropDownItem}>
        {/* <span>Akeem</span> */}
        <Style.UserIcon>
          <img src={userAvatar} width="100%" alt="avater" />
        </Style.UserIcon>
      </Style.Wrapper>
      <Style.Dropdowncontent
        showDropdown={hideDropdownItem}
        onClick={showDropDownItem}
      >
        <span className="dropdown_item" onClick={logOut}>
          Log out{" "}
        </span>
      </Style.Dropdowncontent>
    </div>
  );
};

export default CallToActionBTN;
