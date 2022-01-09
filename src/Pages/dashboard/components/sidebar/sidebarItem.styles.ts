import styled from "styled-components";


export const Wrapper = styled.aside`
  transform: translateX(0%);
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: transform 300ms ease-in-out;
  background-color: #e5e6e9d3;

.sideLogo{
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 40px auto; */
    /* border-radius: 4.5rem; */
    padding: 25px;
    /* border: 1px solid; */
    /* background-color: white; */
}

@media screen and (max-width: 768px) {
  transform: translateX(-100%);
  position: fixed;

}

`
export const ItemWrapper =styled.nav`
.menuItem {
  padding: 25px 5px;
  padding-left: 15px;
  text-align: center;
  /* width: 100%; */
  display: flex;
  text-transform: capitalize;
  white-space: nowrap;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 17px;
  /* color: #; */
  letter-spacing: 0.1px;
}
/* .subMenuItem{
    display: block; 
} */
 
.menuItem i {
  padding: 0 12px;
}
.menuItem:hover, .menuItem.active{
  background-color: #e6f7ff;
  border-right: 4px solid #333 ;
  
}
`