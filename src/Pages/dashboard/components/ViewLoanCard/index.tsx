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

const Card: React.FC<viewLoanProps> = ({ dummyData }) => {
  return (
    <div>
      {dummyData.map((dataType, index) => {
        return (
          <CardWrapper key={index}>
            <h2>{dataType.title}</h2>
            <CardItem>
              {dataType.info.map((info, index2) => {
                return (
                  <CardBlock key={index2}>
                    <p>
                      <strong>{info.key}</strong>: {info.value}
                    </p>
                  </CardBlock>
                );
              })}
            </CardItem>
          </CardWrapper>
        );
      })}
      <CardWrapper>
        <h2>Uploaded Documents</h2>
        <CardItem>
          <DocCard>
            <i className="fa fa-file-text size-lg" aria-hidden="true"></i>
            <p>Birth Certificate.docx</p>
          </DocCard>
          <DocCard>
            <i className="fa fa-file-text size-lg" aria-hidden="true"></i>
            <p>bank Statement.docx</p>
          </DocCard>
          <DocCard>
            <i className="fa fa-file-text size-lg" aria-hidden="true"></i>
            <p>School Certificate.docx</p>
          </DocCard>
        </CardItem>
      </CardWrapper>
    </div>
  );
};

export default Card;
