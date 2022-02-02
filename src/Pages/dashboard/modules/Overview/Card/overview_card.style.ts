import styled from "styled-components";
interface Iconprops {
  status?: string;
}
export const Wrapper = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  margin: 12px;
  /* text-align: center; */
  /* width: 300px; */
  cursor: pointer;
  padding: 20px;
  box-shadow: var(--lightShadow);

  &:hover {
    /* border: 1px solid lightgray; */
    box-shadow: var(--darkShadow);
  }
  /* div:nth-child(1){
    padding: 4px;
    text-align: right;
} */
`;

export const Title = styled.div`
  padding: 8px 0;
  font-weight: bold;
  color: #7f8fa4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TotalNumber = styled.div<Iconprops>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  h4 {
    font-size: 28px;
    font-weight: 500;
    color: ${(props) =>
      props.status === "awaiting"
        ? "lightblue"
        : props.status === "processed"
        ? "lightgreen"
        : props.status === "rejected"
        ? "red"
        : "burlywood"};
  }
  .icon_holder {
    color: ${(props) =>
      props.status === "awaiting"
        ? "lightblue"
        : props.status === "processed"
        ? "lightgreen"
        : props.status === "rejected"
        ? "red"
        : "lightsalmon"};
    /* font-size: ${(props) => (!props.status ? " 23px" : "22px")}; */
    /* color: ${(props) => !props.status && "limegreen"}; */

    padding: 4px;
    border-radius: 50%;
    font-size: 22px;
  }
`;
