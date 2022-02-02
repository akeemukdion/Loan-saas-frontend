import styled from "styled-components";
interface IProps {
  borderColor?: boolean;
}

export const Input = styled.input<IProps>`
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  display: block;
  padding: 15px;
  border-image: ${(props) =>
    props.borderColor &&
    "linear-gradient(135deg,#449f39 10%,RGB(227,177,23,0.9)50%, #ff00a8 70%)1"};
`;
export const Wrapper = styled.div`
  .inputLabel {
    display: block;
    font-weight: bold;
    padding: 6px 0;
    font-size: 14px;
    color: gray;
  }
  .errorMessage {
    font-size: 0.875rem;
    color: #f01717;
    font-style: italic;
    display: none;
  }
  .inputField:invalid[focused="true"] {
    border: #f01717 1px solid;
  }
  .inputField:focus {
    border: lightgreen 1px solid;
  }
  .inputField:invalid[focused="true"] ~ .errorMessage {
    display: block;
  }

  input:focus::placeholder {
    opacity: 0.2;
    font-size: 12px;
  }
  input::placeholder {
    opacity: 0.4;
    font-size: 12px;
  }
`;
