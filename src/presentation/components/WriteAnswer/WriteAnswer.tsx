import getPetitionById from '@api/getPetitionById';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VAC from 'react-vac';
import VWriteAnswer from './VWriteAnswer';

const WriteAnswer = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setPetition(response?.data);
  };
  useEffect(() => {
    fetchPetition();
  }, []);
  const vWriteAnswerProps = {
    petition,
  };
  return (
    <>
      <VAC name="VWriteAnswer" data={vWriteAnswerProps} />
      <VWriteAnswer {...vWriteAnswerProps} />
    </>
  );
};

export default WriteAnswer;
