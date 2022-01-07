import styled from "styled-components";


export const CardWrapper = styled.div`
background-color: #fff;
border-radius: 4px;
margin: 12px;
/* text-align: center; */
/* width: 300px; */
padding: 20px;
box-shadow: var(--lightShadow);
&:hover{
    border: 1px solid lightgray;
box-shadow : var(--darkShadow);

}
div:nth-child(1){
    padding: 4px;
    text-align: right;
}

`

interface BadgeProps {
    loanType?: string;
    loanStatus?: string;
  } 
export const Badge = styled.span<BadgeProps>`
    border: 1px solid lightskyblue;
    padding: 2px;
    font-size: 12px;
    text-transform: capitalize;
    border-radius: 8px;
    color: ${props => props.loanType ==="UKD-Staff loan"? `lightgreen` 
    : props.loanType ==="DEFT"? `lightblue`:null
    // : props.loanStatus ==="processing" ? `lightgreen` 
    // : props.loanStatus ==="rejected" ? "palevioletred"
    // : props.loanStatus ==="review" ? "yellowgreen": null
};
    background-color: ${props => props.loanStatus ==="UKD-Staff loan"? `lightgreen` 
    : props.loanStatus ==="processing" ? `lightgreen` 
    : props.loanStatus ==="rejected" ? "palevioletred"
    : props.loanStatus ==="review" ? "yellowgreen": null
};

`
export const CardItem = styled.div`
cursor: pointer;
p{
    padding: 4px 0;
}
p:first-child > span{
    font-weight: 500;
    font-size: 16px;
}
`