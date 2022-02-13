import { Change } from 'diff';
import styled from 'styled-components';

interface vChangeHighlightProps {
  changes: Array<Change>;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitileWrapper = styled.div`
  height: 8vh;
  width: 50vw;
  white-space: pre-line;
`;

const DiscriptionWrapper = styled.div`
  width: 50vw;
  height: 50vh;
  white-space: pre-line;
`;

const VChangeHighlight = ({ changes }: vChangeHighlightProps): JSX.Element => {
  return (
    <Wrapper>
      <TitileWrapper></TitileWrapper>
      <DiscriptionWrapper>
        {changes.map((part, idx) => {
          const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
          return (
            <span key={part.value + idx} style={{ color: color }}>
              {part.value}
            </span>
          );
        })}
      </DiscriptionWrapper>
    </Wrapper>
  );
};

export default VChangeHighlight;
