import { getPetitionRevisions } from '@api/petitionAPI';
import { Wrapper } from '@components/common';
import VChangeHighlight from '@components/common/VChangeHighlight';
import { Change, diffChars } from 'diff';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VRevisionSelector from './VRevisionSelector';

const RevisionPetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [revisions, setRevisions] = useState<Array<Revision>>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [count, setCount] = useState(0);
  const [titleChanges, setTitleChanges] = useState<Array<Change>>([]);
  const [descChanges, setDescChanges] = useState<Array<Change>>([]);
  const getRevisions = async () => {
    const response = await getPetitionRevisions(petitionId);
    setRevisions(response.data.content);
  };

  useEffect(() => {
    getRevisions();
  }, []);

  useEffect(() => {
    setCount(revisions.length);
    setFrom(0);
    setTo(revisions.length - 1);
  }, [revisions]);

  useEffect(() => {
    setTitleChanges(diffChars(revisions[from]?.petitionTitle || '', revisions[to]?.petitionTitle || ''));
    setDescChanges(diffChars(revisions[from]?.petitionDescription || '', revisions[to]?.petitionDescription || ''));
  }, [from, to]);

  const vSelectorProps = {
    from,
    to,
    count,
    fromChange: (event: ChangeEvent<HTMLSelectElement>) => {
      setFrom(Number(event.target.value));
    },
    toChange: (event: ChangeEvent<HTMLSelectElement>) => {
      setTo(Number(event.target.value));
    },
  };

  const vChangeHighlightProps = {
    titleChanges,
    descChanges,
  };

  return (
    <Wrapper>
      <VRevisionSelector {...vSelectorProps} />
      <VChangeHighlight {...vChangeHighlightProps} />
    </Wrapper>
  );
};

export default RevisionPetition;
