import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  widthSize?: number;
}

export const Loader = styled.div<Props>`
  display: inline;
  position: relative;
  width: ${(props) => (props.widthSize ? `${props.widthSize}px` : "20px")};
  height: ${(props) => (props.widthSize ? `${props.widthSize}px` : "20px")};
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 4px;
    box-sizing: border-box;
    border: 8px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loadglass 1.2s infinite;
  }
  @keyframes loadglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
