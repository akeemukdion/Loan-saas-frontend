import styled from "styled-components";
interface Iconprops {
    product?:string;
}
export const Wrapper = styled.div`
border: 1px solid #ccc;
background-color: #fff;
border-radius: 4px;
margin: 12px;
/* text-align: center; */
/* width: 300px; */
padding: 20px;
box-shadow: var(--lightShadow);


/* div:nth-child(1){
    padding: 4px;
    text-align: right;
} */

`
export const Title = styled.div`
padding: 8px 0;
font-weight: bold;
color: #7f8fa4;
`
export const AmountWrapper = styled.div<Iconprops>`
display: flex;
justify-content: space-between;
align-items: center;

.icon_holder{
color: ${(props)=> props.product ==="DEFF"? "lightblue" : 
props.product === "Federal"? "lightgreen" : props.product === "UK-dion staff" ? "lightsalmon" : "null"};
/* font-size: ${(props)=> !props.product?" 23px" :  "22px" }; */
color: ${(props)=> !props.product && "limegreen" };


    padding: 4px;
    border-radius:50%;
    font-size: 22px;
}
`