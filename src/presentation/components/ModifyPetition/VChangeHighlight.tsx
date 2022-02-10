import { Change } from 'diff';

interface vChangeHighlightProps {
  changes: Array<Change>;
}
const VChangeHighlight = ({ changes }: vChangeHighlightProps): JSX.Element => {
  return (
    <>
      {changes.map((part, idx) => {
        const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
        return (
          <span key={part.value + idx} style={{ color: color }}>
            {part.value}
          </span>
        );
      })}
    </>
  );
};

export default VChangeHighlight;
