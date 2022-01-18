import styled from "styled-components";

export const Wrapper = styled.div`

/* section{ */
    /* padding-top: 60px; */
    fieldset{
        padding: 35px;
        margin-top: 50px;
        legend{
            padding: 4px;
            font-weight: 500;
            font-size: 16px;
            font-style: italic;
        }
    }
/* } */
 .createBTN{
     display: flex;
     justify-content: center;
     align-items: center;
    padding-top: 30px;    

 }

 @media screen and (max-width: 480px) {
    fieldset{
        padding: 10px;
        margin-top: 20px;
        legend{
            padding: 4px;
            font-weight: 500;
            font-size: 16px;
            font-style: italic;
        }
    }
/* } */
 /* .createBTN{
     width: 250px; 
    margin-top: 10px;     
 } */
 }
 `