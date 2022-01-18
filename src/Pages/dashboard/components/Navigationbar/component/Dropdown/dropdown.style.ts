import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 146.7%;
  border-radius: 2.25rem;
  border: 1px solid rgb(63, 61, 61);
  /* width: 55px; */
  cursor: pointer;
  span {
    text-transform: capitalize;
  }

  > * {
    /* border-right: 1px solid #222; */
    /* color: white; */
    /* padding: 12px; */

    cursor: pointer;

    &:hover {
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 480px) {
    > * {
      padding: 10px 14px;
    }
    > span {
      display: none;
    }
  }
`;

export const UserIcon = styled.div`
  width: 50px;
  object-fit: contain;
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

interface IProps {
  showDropdown?: boolean;
}
/* Dropdown Content (Hidden by Default) */
export const Dropdowncontent = styled.div<IProps>`
  position: absolute;
  /* background-color: #ffffff; */
  background-color: #ccc;
  min-width: 150px;
  margin-top: 15px;
  z-index: 1;
  display: ${(prop) => (prop.showDropdown ? "block" : "none")};
  .dropdown_item {
    padding: 10px 8px;
    font-size: 16px;
    line-height: 146.7%;
    color: #000;
    display: block;
    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 480px) {
    right: 5%;
  }
`;
