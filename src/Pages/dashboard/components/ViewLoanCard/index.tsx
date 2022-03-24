import { CardWrapper, CardItem, CardBlock, DocCard } from "./card.style";

type viewLoanProps = {
  dummyData: Array<{
    title: string;
    info: Array<{
      key: string;
      value: string;
    }>;
  }>;
};

const Card = ({ dummyData }: viewLoanProps) => {
  const UploadedDocLayout = (value: string) => (
    <DocCard>
      <i className="fa fa-file-text size-lg" aria-hidden="true"></i>
      <p>{value}</p>
    </DocCard>
  );
  return (
    <div>
      {dummyData.map((dataType, index) => (
        <CardWrapper key={index}>
          <h2>{dataType.title}</h2>
          <CardItem>
            {dataType.info.map((info, index2) => (
              <CardBlock key={index2}>
                <p>
                  <strong>{info.key}</strong>:{" "}
                  {info.key === "Loan Amount" ? (
                    <span> &#8358;{info.value}</span>
                  ) : (
                    info.value
                  )}
                </p>
              </CardBlock>
            ))}
          </CardItem>
        </CardWrapper>
      ))}
      <CardWrapper>
        <h2>Uploaded Documents</h2>
        <CardItem>
          {UploadedDocLayout("Birth Certificate.docx")}
          {UploadedDocLayout("bank Statement.docx")}
          {UploadedDocLayout("School Certificate.docx")}
        </CardItem>
      </CardWrapper>
    </div>
  );
};

export default Card;
