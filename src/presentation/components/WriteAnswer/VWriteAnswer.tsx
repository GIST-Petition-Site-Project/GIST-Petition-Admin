import styled from 'styled-components';
import { Wrapper, Title, StLine, StButton, BottomPadder } from '@components/common';
import PALETTE from '@styles/palette';
import { getDate } from '@utils/getTime';
interface vWriteAnswerProps {
  petition: Petition | undefined;
  answer: string;
  handleChange: any;
  handleSubmit: any;
}

const Writer = styled.textarea`
  background-color: ${PALETTE.BACKGROUND};
  font-family: Pretendard;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 60vh;
  padding: 1em;
  outline-color: #444;
  :focus {
    background-color: #222;
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
  color: white;
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
  color: white;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5em;
`;

const PetitionDate = styled.div`
  white-space: pre-line;
  width: 100%;
  padding-right: 1em;
  text-align: end;
  color: white;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.5em;
`;

const VWriteAnswer = ({ petition, answer, handleChange, handleSubmit }: vWriteAnswerProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>답변 등록</Title>
      <form onSubmit={handleSubmit}>
        <PetitionWrapper>
          <PetitionTitle>{petition?.title}</PetitionTitle>
          <PetitionDescription>{petition?.description}</PetitionDescription>
          <PetitionDate>최초 작성 {getDate(petition?.createdAt || '')}</PetitionDate>
          <PetitionDate>마지막 수정 {getDate(petition?.updatedAt || '')}</PetitionDate>
        </PetitionWrapper>
        <StLine />
        <TitleWrapper>
          <Title>{petition?.answered ? '답변 수정' : '답변 작성'}</Title>
          <StButton type="submit">답변 등록</StButton>
        </TitleWrapper>
        <Writer value={answer} onChange={handleChange}></Writer>
        <BottomPadder />
      </form>
    </Wrapper>
  );
};

export default VWriteAnswer;
