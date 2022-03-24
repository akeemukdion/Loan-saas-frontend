import styled from "styled-components";

export const Wrapper = styled.div`
  fieldset {
    padding: 35px;
    margin-top: 50px;
    legend {
      padding: 4px;
      font-weight: 500;
      font-size: 16px;
      font-style: italic;
    }
  }
  /* } */
  .fileWrapper {
    display: flex;
    justify-content: space-evenly;
    /* flex-direction: column; */
    align-items: center;
  }
  .createBTN {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }

  @media screen and (max-width: 480px) {
    fieldset {
      padding: 10px;
      margin-top: 20px;
      legend {
        padding: 4px;
        font-weight: 500;
        font-size: 16px;
        font-style: italic;
      }
      .fileWrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    }
    /* } */
    /* .createBTN{
     width: 250px; 
    margin-top: 10px;     
 } */
  }
`;
