import PALETTE from '@styles/palette';
import { Change } from 'diff';
import styled from 'styled-components';

interface vChangeHighlightProps {
  titleChanges: Array<Change>;
  descChanges: Array<Change>;
}

const TitleWrapper = styled.div`
  background-color: ${PALETTE.BACKGROUND};
  border: 1px solid rgb(118, 118, 118);
  font-family: Pretendard;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 10vh;
  padding: 1em;
  margin-bottom: 1em;
  outline-color: #444;
  :focus {
    background-color: #222;
  }
`;

const DescriptionWrapper = styled.div`
  white-space: pre-line;
  border: 1px solid rgb(118, 118, 118);
  background-color: ${PALETTE.BACKGROUND};
  font-family: Pretendard;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 60vh;
  padding: 1em;
  outline-color: #444;
  line-height: 1.5em;
  :focus {
    background-color: #222;
  }
`;

const AddedSpan = styled.span`
  background-color: ${PALETTE.GREEN};
`;
const RemovedSpan = styled.span`
  background-color: ${PALETTE.PRIMARY_RED};
  text-decoration: line-through;
`;
const UnchangedSpan = styled.span`
  color: gray;
`;

const VChangeHighlight = ({ titleChanges, descChanges }: vChangeHighlightProps): JSX.Element => {
  return (
    <>
      <TitleWrapper>
        {titleChanges.map((part, idx) => {
          const key = part.value + idx;
          if (part.added) {
            return <AddedSpan key={key}>{part.value}</AddedSpan>;
          } else if (part.removed) {
            return <RemovedSpan key={key}>{part.value}</RemovedSpan>;
          } else {
            return <UnchangedSpan key={key}>{part.value}</UnchangedSpan>;
          }
        })}
      </TitleWrapper>
      <DescriptionWrapper>
        {descChanges.map((part, idx) => {
          const key = part.value + idx;
          if (part.added) {
            return <AddedSpan key={key}>{part.value}</AddedSpan>;
          } else if (part.removed) {
            return <RemovedSpan key={key}>{part.value}</RemovedSpan>;
          } else {
            return <UnchangedSpan key={key}>{part.value}</UnchangedSpan>;
          }
        })}
      </DescriptionWrapper>
    </>
  );
};

export default VChangeHighlight;
