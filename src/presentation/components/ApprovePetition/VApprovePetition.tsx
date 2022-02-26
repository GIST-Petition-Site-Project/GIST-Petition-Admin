import styled from 'styled-components';
import { Wrapper, Title, StLine, StButton, BottomPadder } from '@components/common';
import { getDate } from '@utils/getTime';
import VPetition from '@components/common/VPetition';
interface vWriteAnswerProps {
  petition: Petition | undefined;
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

const MLine = styled(StLine)`
  margin-bottom: 2em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VApprovePetition = ({ petition }: vWriteAnswerProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>청원 승인</Title>
      <VPetition petition={petition} />
    </Wrapper>
  );
};

export default VApprovePetition;
