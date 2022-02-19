import styled from 'styled-components';
import { Wrapper, Title, StLine, StButton, BottomPadder } from '@components/common';
import { getDate } from '@utils/getTime';
interface vWriteAnswerProps {
  petition: Petition | undefined;
  handleClick: any;
}

const PetitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VApprovePetition = ({ petition, handleClick }: vWriteAnswerProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>청원 승인</Title>
      <PetitionWrapper>
        <PetitionTitle>{petition?.title}</PetitionTitle>
        <PetitionDescription>{petition?.description}</PetitionDescription>
        <PetitionDate>최초 작성 {getDate(petition?.createdAt || '')}</PetitionDate>
        <PetitionDate>마지막 수정 {getDate(petition?.updatedAt || '')}</PetitionDate>
      </PetitionWrapper>
      <StLine />
      <ButtonWrapper>
        <StButton onClick={handleClick}>청원 승인</StButton>
      </ButtonWrapper>
      <BottomPadder />
    </Wrapper>
  );
};

export default VApprovePetition;
