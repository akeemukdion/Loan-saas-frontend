import styled from "styled-components";

export const ButtonWrapper = styled.button`

   transition: 0.5s;
     background-size: 200% auto;
     box-shadow: 0 0 20px #eee;
    min-width: 150px;
    width: 100%;
    height: 46px;
    letter-spacing: 0.03em;
    line-height: 23px;
    padding: 0 25px 0 25px;
    overflow: hidden;
    font-family: var(--general-font);
    font-weight: 500;
    font-size: 17px;
    /* background-color: var(--primary-btn-color); */
    display: inline-block;
    color: #ffffff;
    text-transform: capitalize;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%);
  
  
  &:hover {
    background-color: var(--title-text-color);
    border: 1px solid var(--mainWhite);
    background-position: right center; /* change the direction of the change here */
    color: #ccc;
  }
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 480px) {
    
      letter-spacing: 0.3px;
      padding: 0 15px;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      width: 100%;
    
  }

`


/* 
  
     background-size: 200% auto;
     color: white;            
     box-shadow: 0 0 20px #eee;
     border-radius: 10px;
     display: block;
   }

   .btn-grad:hover {
     background-position: right center; /* change the direction of the change here */
     /* color: #fff;
     text-decoration: none;
   }
    */