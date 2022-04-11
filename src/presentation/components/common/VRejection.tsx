import { AnswerWrapper, AnswerDescription, AnswerDate, StLine } from '@components/common';
import { getDate } from '@utils/timeFormat';
import styled from 'styled-components';

const MLine = styled(StLine)`
  margin-bottom: 2em;
`;

interface vRejectionProps {
  rejection?: Rejection;
}

const VRejection = ({ rejection }: vRejectionProps): JSX.Element => {
  return (
    <>
      <AnswerWrapper>
        <AnswerDescription>{rejection?.description}</AnswerDescription>
        <AnswerDate>최초 작성 {getDate(rejection?.createdAt || 0)}</AnswerDate>
        <AnswerDate>마지막 수정 {getDate(rejection?.updatedAt || 0)}</AnswerDate>
      </AnswerWrapper>
      <MLine />
    </>
  );
};

export default VRejection;
