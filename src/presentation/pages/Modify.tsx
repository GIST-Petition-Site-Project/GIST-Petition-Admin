import { Title, Wrapper } from '@components/common';
import PetitionList from '@components/PetitionList';

const Modify = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>청원 수정</Title>
      <PetitionList />
    </Wrapper>
  );
};

export default Modify;
