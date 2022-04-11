import { getAnswerRevisions } from '@api/answerAPI';
import { getPetitionById, getPetitionRevisions } from '@api/petitionQueryAPI';
import { BottomPadder, Description, Wrapper } from '@components/common';
import VChangeHighlight from '@components/common/VChangeHighlight';
import { getDate } from '@utils/timeFormat';
import { Change, diffChars } from 'diff';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VAnswerRevision from './VAnswerRevision';
import VRevisionSelector from './VRevisionSelector';

const Revision = (): JSX.Element => {
  const { petitionId } = useParams();
  const [revisions, setRevisions] = useState<Array<Revision>>([]);
  const [answerRevisions, setAnswerRevisions] = useState<Array<AnswerRevision>>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [answerVersion, setAnswerVersion] = useState(0);
  const [count, setCount] = useState(0);
  const [titleChanges, setTitleChanges] = useState<Array<Change>>([]);
  const [descChanges, setDescChanges] = useState<Array<Change>>([]);

  const fetchRevisions = async () => {
    const petitionResponse = await getPetitionRevisions(petitionId);
    setRevisions(petitionResponse.data.content);

    const response = await getPetitionById(petitionId);
    if (response?.data?.answered) {
      const answerResponse = await getAnswerRevisions(petitionId);
      setAnswerRevisions(answerResponse?.data.content || []);
    }
  };

  useEffect(() => {
    fetchRevisions();
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

  const vAnswerRevisionProps = {
    answerRevisions,
    answerVersion,
    answerSelect: (event: ChangeEvent<HTMLSelectElement>) => {
      setAnswerVersion(Number(event.target.value));
    },
  };

  return (
    <Wrapper>
      <VRevisionSelector {...vSelectorProps} />
      <Description>{to === 0 ? '해당 글은 수정된적 없습니다' : `Editor: ${revisions[to]?.workedBy}`}</Description>
      <Description>업데이트 {getDate(revisions[to]?.revisionTime || 0)}</Description>
      <VChangeHighlight {...vChangeHighlightProps} />
      <BottomPadder />
      {answerRevisions.length > 0 ? <VAnswerRevision {...vAnswerRevisionProps} /> : null}
      <BottomPadder />
    </Wrapper>
  );
};

export default Revision;
