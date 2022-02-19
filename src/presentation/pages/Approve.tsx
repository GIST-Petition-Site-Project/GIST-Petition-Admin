import { Title, Wrapper } from '@components/common';
import PetitionList from '@components/PetitionList';

const Approve = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>청원 승인</Title>
      <PetitionList type="release" />
    </Wrapper>
  );
};

export default Approve;
