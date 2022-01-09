import { Data } from "./MenuItemData";
import logo from "../../../../assets/logo.png";
import SideBarItem from "./SideBarItem";
import { Wrapper } from "./sidebarItem.styles";
const SideBarNav = () => {
  // console.log(Data);
  return (
    <Wrapper>
      <div>
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
