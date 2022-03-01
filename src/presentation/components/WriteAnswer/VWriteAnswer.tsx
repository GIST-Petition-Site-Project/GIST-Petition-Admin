import styled from 'styled-components';
import { Title, StButton, BottomPadder } from '@components/common';
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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const VWriteAnswer = ({ isAnswered, petition, answer, handleChange, handleSubmit }: vWriteAnswerProps): JSX.Element => {
  return (
    <form onSubmit={handleSubmit}>
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
