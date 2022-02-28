import { Title, TitleWrapper, Wrapper } from '@components/common';
import PetitionList from '@components/PetitionList';

const Manage = (): JSX.Element => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>청원 관리</Title>
      </TitleWrapper>
      <PetitionList />
    </Wrapper>
  );
};

export default Manage;
