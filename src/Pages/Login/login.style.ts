import styled from "styled-components";

export const Container =styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* background: linear-gradient(141deg, rgba(9, 87, 35,0.2) 20%, rgba(224, 227, 23, 0.6) 41%, rgba(31, 97, 31,0.5) 65%); */

    background: rgba(0, 0, 0, 0.171);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 10px;
  backdrop-filter: blur(25px);


&::before {
    content: "";
    position: absolute;
  
    top: 0;
    left: -48%;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.05);
    pointer-events: none;
    transform: skewX(-15deg);
  }
`
export const Form = styled.form`

    position: relative;
    background-color: #fff;
    padding: 35px;
    border-radius: 12px;
}
.logoContainer{
    position: absolute;
    top: -38px;
    left: 50%;
    /* -ms-transform: translateX(-50%); */
    /* -webkit-transform: translate(-50%); */
    transform: translateX(-50%);
    padding: 15px;
    background-color: #fff;
    width:75px;
    border-radius: 2.6rem;
}
.inputfield{
    padding: 20px 0;
    /* margin: 0 12px; */
}
.error_message{
    /* color: red; */
    padding: 10px;
    font-style: italic;
    background-color: lightpink;
    border-radius: 4px;
    border: 1px solid black;
}
.Forgotpassword{
    display: flex;
    justify-content: flex-end;
    padding: 8px 0;
}

@media screen and (min-width:768px) {
&{
    position: relative;
    background-color: #fff;
    width: 35vw;
    padding: 45px;
    border-radius: 12px;
}
.logoContainer{
    position: absolute;
    top: -51px;
    left:50%;
    /* -ms-transform: translateX(-50%); */
    /* -webkit-transform: translate(-50%); */
    transform: translateX(-50%);
    padding: 15px;
    background-color: #fff;
    width:95px;
    border-radius: 2.6rem;
}
.inputfield{
    padding: 20px 0;
    /* margin: 0 12px; */
}
.Forgotpassword{
    display: flex;
    justify-content: flex-end;
    padding: 8px 0;
} 
`