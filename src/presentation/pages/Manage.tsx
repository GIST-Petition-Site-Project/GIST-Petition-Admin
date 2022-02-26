import { Title, Wrapper } from '@components/common';
import PetitionList from '@components/PetitionList';

const Manage = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>청원 관리</Title>
      <PetitionList />
    </Wrapper>
  );
};

export default Manage;
