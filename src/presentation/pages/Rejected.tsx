import { Title, Wrapper } from '@components/common';
import PetitionList from '@components/PetitionList';

const Rejected = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>반려된 청원</Title>
      <PetitionList type="rejected" />
    </Wrapper>
  );
};

export default Rejected;
