import { Data } from "./MenuItemData";
import logo from "../../../../assets/logo.png";
import SideBarItem from "./SideBarItem";
import { Wrapper } from "./sidebarItem.styles";

type Props = {
  isOpen: boolean;
};

const SideBarNav = ({ isOpen }: Props) => {
  // console.log(isOpen);
  return (
    <Wrapper showSideBar={isOpen}>
      <div style={{ position: "relative" }}>
        {/* <span>X</span> */}
        <div className="sideLogo">
          <img src={logo} alt="business loan" width="80px" height="" />
        </div>
        {Data.map((item, index) => (
          <SideBarItem key={index} data={item} iconName={item.iconName} />
        ))}
      </div>
    </Wrapper>
  );
};

export default SideBarNav;
