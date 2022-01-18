import styled from "styled-components";
type SizeProps ={
  xs?: boolean;
  colored?:boolean
  small?: boolean;
};
export const ButtonWrapper = styled.button<SizeProps>`

   transition: 0.5s;
     background-size: 200% auto;
     box-shadow: 0 0 20px #eee;
    /* min-width: 10px; */
    width:${(props)=> props.xs ? "auto" : props.small ? "100px" : "100%" }; 
    height: ${(props)=> props.xs ? "auto" : props.small ? "auto" : "46px" };
    letter-spacing: 0.03em;
    line-height: 23px;
    padding:${(props)=> props.xs ? "0 12px 0 12px;" : props.small ? "5px 12px 5px 12px;" : "0 25px 0 25px;" }; 
    overflow: hidden;
    font-family: var(--general-font);
    font-weight: 500;
    font-size: ${(props)=> props.xs ? "10px" : props.small ? "inherit" : "17px" };
    background-color:${(props)=> props.xs && !props.colored ?"#fff": props.small && !props.colored && "#fff"};
    display: inline-block;
    color: ${(props)=> props.xs ? "black" : props.small ? "black" : "#ffffff" }; 
    text-transform: capitalize;
    border: ${(props)=> !props.colored ? "1px solid green" : "none"};
    border-radius: 8px;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image:${(props)=> props.colored && ("linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)")};
    border-image:${(props)=> !props.colored && ("linear-gradient(135deg,#449f39 10%,RGB(227,177,23,0.9)50%, #ff00a8 70%)1")};
  
  &:hover {
    /* background-color: var(--title-text-color); */
    border: 1px solid var(--mainWhite);
    background-position: right center; /* change the direction of the change here */
    color: #ddd;
    background-image:${(props)=> props.xs ? ("linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)") 
    : props.small && ("linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)")};
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