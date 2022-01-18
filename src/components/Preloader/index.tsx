import React from "react";
import * as Style from "./loader.style";

interface Props {
  width?: number;
}

const Loader: React.FC<Props> = (width) => {
  return (
    <Style.Wrapper>
      <Style.Loader></Style.Loader>
    </Style.Wrapper>
  );
};

export default Loader;
