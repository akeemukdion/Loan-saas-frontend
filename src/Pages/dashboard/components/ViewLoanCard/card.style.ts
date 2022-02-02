import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  margin: 20px 12px;
  padding: 20px;
  box-shadow: var(--lightShadow);
`;
export const CardItem = styled.div`
  margin: 20px auto;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const CardBlock = styled.div`
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  padding: 10px;
  color: #888;
`;
export const DocCard = styled.div`
  border: 1px dashed #999;
  margin: 10px auto;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
