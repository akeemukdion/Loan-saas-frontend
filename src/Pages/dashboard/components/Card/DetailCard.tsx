import { Badge, CardWrapper,CardItem } from "./card.style"

type loanItemProps ={
    item: {name:string;
    statusBadge:string;
    loanType:string;
    amount:number;
    branch:string;
    createdBy:string;
    createdDate:any;
}

}
// type Props ={
//     item:loanItem
// }

const DetailCard:React.FC<loanItemProps>= ({item}) => {
    return (
        <CardWrapper>
            <div>
                <Badge loanStatus={item.statusBadge}>{item.statusBadge}</Badge>
            </div>
            <CardItem >
                <p>Name: <span>{item.name.toUpperCase()}</span></p>
                <p>Product: <Badge loanType={item.loanType} >{item.loanType}</Badge></p>
                <p>Amount:<i>&#8358; </i> {item.amount}</p>
                <p>Branch: {item.branch}</p>
                <p>Created By: {item.createdBy}</p>
                <p>Created Date: {item.createdDate}</p>
            </CardItem>
            
        </CardWrapper>
    )
}

export default DetailCard
