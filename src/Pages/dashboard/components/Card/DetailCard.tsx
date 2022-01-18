import { Badge, CardWrapper, CardItem, Details } from "./card.style";

type loanItemProps = {
  item: {
    name: string;
    statusBadge: string;
    loanType: string;
    amount: number;
    branch: string;
    createdBy: string;
    createdDate: any;
  };
};
// type Props ={
//     item:loanItem
// }

const DetailCard: React.FC<loanItemProps> = ({ item }) => {
  return (
    <CardWrapper>
      <div>
        <Badge loanStatus={item.statusBadge}>Id:002</Badge>
      </div>
      <CardItem>
        <p>
          Name: <span>{item.name.toUpperCase()}</span>
        </p>
        <p>
          Product: <Badge loanType={item.loanType}>{item.loanType}</Badge>
        </p>
        <p>
          Amount:<i>&#8358; </i> {item.amount}
        </p>
        <p>Branch: {item.branch}</p>
        <p>Created By: {item.createdBy}</p>
        <p>Created Date: {item.createdDate}</p>
      </CardItem>
      <Details>
        <summary>Reason for decline</summary>
        <p>
          Something small enough to escape casual notice. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odio rem nulla, soluta natus eaque,
          voluptas iusto molestiae distinctio provident explicabo odit fugiat
          ipsa, minus vitae repellendus sint ratione laboriosam excepturi.
        </p>
      </Details>
      {/* <p>As i don't have the capacity</p> */}
      {/* </details> */}
    </CardWrapper>
  );
};

export default DetailCard;
