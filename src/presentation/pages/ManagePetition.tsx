import { getAnswer } from '@api/answerAPI';
import { getPetitionById, getTempPetition } from '@api/petitionAPI';
import { ButtonWrapper, StButton, Title, TitleWrapper, Wrapper } from '@components/common';
import VAnswer from '@components/common/VAnswer';
import VPetition from '@components/common/VPetition';
import RevisionPetition from '@components/RevisionPetition';
import WriteAnswer from '@components/WriteAnswer';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ManagePetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const [answer, setAnswer] = useState<Answer | undefined>();
  const fetchPetition = async () => {
    const petitionResponse = await getPetitionById(petitionId);
    setPetition(petitionResponse?.data);
    if (petitionResponse?.data.answered) {
      const answerResponse = await getAnswer(petitionId);
      console.log(answerResponse);
      setAnswer(answerResponse?.data);
    }
  };

  useEffect(() => {
    fetchPetition();
  }, []);

  const navigate = useNavigate();
  const navigateModify = () => {
    navigate(`/modify/${petitionId}`);
  };
  const navigateRevision = () => {
    navigate(`/revision/${petitionId}`);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>청원 관리</Title>
        <StButton onClick={navigateRevision}>수정 이력</StButton>
      </TitleWrapper>
      <VPetition petition={petition} />
      {answer ? <VAnswer answer={answer} /> : null}
      {/* <WriteAnswer /> */}
    </Wrapper>
  );
};

export default ManagePetition;
