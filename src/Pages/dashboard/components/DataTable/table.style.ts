import styled from "styled-components";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;

th, td {
  text-align: left;
  padding: 18px;
  
}
th{
  background-color: #f2f2f2;
}
tr{
  border-bottom: 1px solid #ccc;
  &:hover{
    background-color: #f2f2f2
  }
}
/* tr:nth-child(even){background-color: #f2f2f2} */
`


interface Statusprops {
  status?:string;
}
export const Status = styled.span<Statusprops>`
font-size: 14px;
text-transform: capitalize;
color:${(props)=> props.status ==="awaiting"? "lightblue" : 
props.status === "processed"? "lightgreen" : props.status === "rejected" ? "red" : "burlywood"};
`