import { StLine } from '@components/common';
import { getDate } from '@utils/timeFormat';
import styled from 'styled-components';

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerDescription = styled.div`
  white-space: pre-line;
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 1.5em;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5em;
  min-height: 50vh;
`;

const AnswerDate = styled.div`
  white-space: pre-line;
  width: 100%;
  padding-right: 1em;
  text-align: end;
  color: ${(props) => props.theme.colors.text};
  font-weight: 200;
  font-size: 12px;
  line-height: 1.5em;
`;

const MLine = styled(StLine)`
  margin-bottom: 2em;
`;

interface IAnswer {
  answer: Answer | undefined;
}

const VAnswer = ({ answer }: IAnswer): JSX.Element => {
  return (
    <>
      <AnswerWrapper>
        <AnswerDescription>{answer?.content}</AnswerDescription>
        <AnswerDate>최초 작성 {getDate(answer?.createdAt || 0)}</AnswerDate>
        <AnswerDate>마지막 수정 {getDate(answer?.updatedAt || 0)}</AnswerDate>
      </AnswerWrapper>
      <MLine />
    </>
  );
};

export default VAnswer;
