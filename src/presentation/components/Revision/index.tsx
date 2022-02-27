import { getAnswer, getAnswerRevisions } from '@api/answerAPI';
import { getPetitionRevisions } from '@api/petitionAPI';
import { BottomPadder, Content, Description, StSelect, Title, TitleWrapper, Wrapper } from '@components/common';
import VChangeHighlight from '@components/common/VChangeHighlight';
import { getDate } from '@utils/getTime';
import { Change, diffChars } from 'diff';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import VAnswerRevision from './VAnswerRevision';
import VRevisionSelector from './VRevisionSelector';

const Revision = (): JSX.Element => {
  const { petitionId } = useParams();
  const [revisions, setRevisions] = useState<Array<Revision>>([]);
  const [answered, setAnswered] = useState(false);
  const [answerRevisions, setAnswerRevisions] = useState<Array<AnswerRevision>>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [answerVersion, setAnswerVersion] = useState(0);
  const [count, setCount] = useState(0);
  const [titleChanges, setTitleChanges] = useState<Array<Change>>([]);
  const [descChanges, setDescChanges] = useState<Array<Change>>([]);

  const fetchRevisions = async () => {
    const response = await getPetitionRevisions(petitionId);
    setRevisions(response.data.content);

    const fetchAnswerId = await getAnswer(petitionId);
    if (fetchAnswerId?.data.id) {
      setAnswered(true);
      const answerResponse = await getAnswerRevisions(fetchAnswerId?.data.id);
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
      {answered ? <VAnswerRevision {...vAnswerRevisionProps} /> : null}
      <BottomPadder />
    </Wrapper>
  );
};

export default Revision;
