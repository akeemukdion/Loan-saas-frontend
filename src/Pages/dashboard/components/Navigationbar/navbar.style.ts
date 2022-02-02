import styled from "styled-components";

export const NavWrapper =styled.nav`
position: relative;
.navItems {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  padding-left: 50px;
  box-shadow: var(--lightShadow);
}

.toggleIcon_onMobile {
  display: none;
  position: absolute;
  top: 30px;
  left: 10px;
  font-size: 30px;
}
.navSearch {
  width: 450px;
}
.navItemGroup {
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-around;
  /* padding: 20px; */
}
.navItemGroup > i {
  font-size: 20px;
  color: #7f8fa4;
  cursor: pointer;
  padding: 4px;
  background-color: #c7c4c4;
  border-radius: 50px;
}

@media screen and (max-width:768px) {


  .navSearch {
  width: auto;
}
.navItemGroup {
  justify-content: space-between;

  width: auto;
  /* padding: 20px; */
}
.navItemGroup > i {
display: none;
}
  .toggleIcon_onMobile{
    display: block;
  }
}
`