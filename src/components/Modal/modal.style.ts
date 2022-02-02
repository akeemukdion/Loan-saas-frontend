import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: rgb(213, 213, 213);
  background-color: rgba(124, 118, 118, 0.6);
  z-index: 1000;
  overflow: auto;
`;
export const ContentWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1.5rem;
  transform: translate(-50%, -50%);
  /* background-color: #fff; */
  z-index: 1000;
  max-width: 90%;
  width: max-content;
  max-height: max-content;
  -webkit-transition: all 5s;
  -moz-transition: all 5s;
  transition: all 5s;
  border-radius: 8px;
  background: #f1f3f8;
`;

export const CloseBTN = styled.div`
  /* justify-content: flex-end; */
  position: absolute;
  top: 2px;
  right: 2px;
  /* border: 1px solid #ccc; */
  cursor: pointer;
  padding: 2px 6px;
  font-size: 16px;
  /* line-height: 28px;
  font-weight: 600;
  border-radius: 4px; */
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  padding: 2px 6px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
`;
