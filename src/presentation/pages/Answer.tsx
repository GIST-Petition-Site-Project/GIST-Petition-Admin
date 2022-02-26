import PetitionList from '@components/PetitionList';
import WriteAnswer from '@components/WriteAnswer';
import { Wrapper, Title } from '@components/common';

const Answer = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>답변 등록</Title>
      <PetitionList type="answer" />
    </Wrapper>
  );
};
export default Answer;
