import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  justify-items: stretch;
  align-items: stretch;
  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`;
export const BreakdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
