import { AnswerWrapper, AnswerDescription, AnswerDate, StLine } from '@components/common';
import { getDate } from '@utils/timeFormat';
import styled from 'styled-components';

const MLine = styled(StLine)`
  margin-bottom: 2em;
`;

interface vAnswerProps {
  answer?: Answer;
}

const VAnswer = ({ answer }: vAnswerProps): JSX.Element => {
  return (
    <>
      <AnswerWrapper>
        <AnswerDescription>{answer?.description}</AnswerDescription>
        <AnswerDate>최초 작성 {getDate(answer?.createdAt || 0)}</AnswerDate>
        <AnswerDate>마지막 수정 {getDate(answer?.updatedAt || 0)}</AnswerDate>
      </AnswerWrapper>
      <MLine />
    </>
  );
};

export default VAnswer;
