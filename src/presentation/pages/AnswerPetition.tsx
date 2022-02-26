import { getPetitionById, getTempPetition } from '@api/petitionAPI';
import { Title, Wrapper } from '@components/common';
import VPetition from '@components/common/VPetition';
import WriteAnswer from '@components/WriteAnswer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnswerPetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setPetition(response?.data);
  };
  useEffect(() => {
    fetchPetition();
  }, []);
  return (
    <Wrapper>
      <Title>청원 관리</Title>
      <VPetition petition={petition} />
      <WriteAnswer />
    </Wrapper>
  );
};

export default AnswerPetition;
