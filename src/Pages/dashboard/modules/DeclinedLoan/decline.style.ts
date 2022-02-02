import styled from "styled-components";

export const ReqeustWrapper = styled.div`
font-weight: bold;
`



export const Container=styled.div`
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-column-gap: 5px;
    grid-row-gap: 10px;
    justify-items: stretch;
    align-items: stretch;
/* font-weight: bold; */

@media screen and (max-width:480px) {
    grid-template-columns:auto ;
}
`