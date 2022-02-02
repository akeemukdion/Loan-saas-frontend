import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 15px;

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`;
export const Title = styled.h2`
  /* font-size: 18px; */
  padding: 12px 0;
  text-align: center;
  color: gray;
  /* font-weight: 500; */
`;
export const TextareaWrapper = styled.div`
  padding: 8px 0;
`;
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
