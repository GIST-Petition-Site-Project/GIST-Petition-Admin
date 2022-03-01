import styled from 'styled-components';
import { Wrapper, Title, StLine, StButton, BottomPadder } from '@components/common';
import { getDate } from '@utils/timeFormat';
import VPetition from '@components/common/VPetition';
interface vWriteAnswerProps {
  isAnswered: boolean;
  petition: Petition | undefined;
  answer: string;
  handleChange: any;
  handleSubmit: any;
}

const Writer = styled.textarea`
  background-color: ${(props) => props.theme.colors.background};
  font-family: Pretendard;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 60vh;
  padding: 1em;
  outline-color: #444;
  :focus {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const PetitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PetitionTitle = styled.div`
  white-space: pre-line;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 28px;
  line-height: 1.5em;
  margin-bottom: 1em;
`;

const PetitionDescription = styled.div`
  white-space: pre-line;
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 1.5em;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5em;
`;

const PetitionDate = styled.div`
  white-space: pre-line;
  width: 100%;
  padding-right: 1em;
  text-align: end;
  color: ${(props) => props.theme.colors.text};
  font-weight: 200;
  font-size: 12px;
  line-height: 1.5em;
`;

const VWriteAnswer = ({ isAnswered, petition, answer, handleChange, handleSubmit }: vWriteAnswerProps): JSX.Element => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <Petition petition={petition} /> */}
      <TitleWrapper>
        <Title>{petition?.answered ? '답변 수정' : '답변 작성'}</Title>
        <StButton type="submit">{isAnswered ? '답변 수정' : '답변 등록'}</StButton>
      </TitleWrapper>
      <Writer value={answer} onChange={handleChange}></Writer>
      <BottomPadder />
    </form>
  );
};

export default VWriteAnswer;
