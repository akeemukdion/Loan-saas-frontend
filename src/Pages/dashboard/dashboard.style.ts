import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #f1f9fa44;

 .main {
  flex: 1;
  margin-left: 250px;

  @media screen and (max-width:768px) {
  margin-left: 0px;

  }
}
.viewPoint {
  padding: 20px 5px 0 30px;
  font-weight: 500;
  font-size: 16px;
}

.mainView {
  padding: 50px;
  @media screen and (max-width:768px) {
    padding: 15px;

  }
}
`