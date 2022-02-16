import { Change } from 'diff';
import styled from 'styled-components';

interface vChangeHighlightProps {
  titleChanges: Array<Change>;
  descChanges: Array<Change>;
}

const TitleWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid rgb(118, 118, 118);
  font-family: Pretendard;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 10vh;
  padding: 1em;
  margin-bottom: 1em;
  outline-color: #444;
  transition: 0.2s;
  :focus {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const DescriptionWrapper = styled.div`
  white-space: pre-line;
  overflow: auto;
  border: 1px solid rgb(118, 118, 118);
  background-color: ${(props) => props.theme.colors.background};
  font-family: Pretendard;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 60vh;
  padding: 1em;
  outline-color: #444;
  line-height: 1.5em;
  transition: 0.2s;
  :focus {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const AddedSpan = styled.span`
  background-color: ${(props) => props.theme.colors.gistGreen};
`;
const RemovedSpan = styled.span`
  background-color: ${(props) => props.theme.colors.gistRed};
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
