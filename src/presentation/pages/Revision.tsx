import { Title, Wrapper } from '@components/common';
import PetitionList from '@components/PetitionList';

const Revision = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>청원 수정 이력</Title>
      <PetitionList />
    </Wrapper>
  );
};

export default Revision;
