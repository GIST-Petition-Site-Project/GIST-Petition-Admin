import { getTempPetition, postPetitionRelease } from '@api/petitionAPI';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VApprovePetition from './VApprovePetition';
import { useToast } from '@hooks/useToast';

const WriteAnswer = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const fetchPetition = async () => {
    const response = await getTempPetition(petitionId);
    setPetition(response?.data);
  };
  useEffect(() => {
    fetchPetition();
  }, []);

  const navigate = useNavigate();
  const fireToast = useToast();

  const vWriteAnswerProps = {
    petition,
    handleClick: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response = await postPetitionRelease(String(petition?.id));
      navigate('/approve');
      fireToast({ message: '청원이 게시되었습니다.', type: 'success' });
    },
  };
  return (
    <>
      {/* <VAC name="VWriteAnswer" data={vWriteAnswerProps} /> */}
      <VApprovePetition {...vWriteAnswerProps} />
    </>
  );
};

export default WriteAnswer;
