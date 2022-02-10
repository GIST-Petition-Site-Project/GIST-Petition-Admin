import getAnswer from '@api/getAnswer';
import getPetitionById from '@api/getPetitionById';
import postAnswer from '@api/postAnswer';
import putAnswer from '@api/putAnswer';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import VAC from 'react-vac';
import VWriteAnswer from './VWriteAnswer';

const WriteAnswer = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const [answer, setAnswer] = useState('');
  const [isAnswered, setAnswered] = useState(false);
  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setPetition(response?.data);
    if (response?.data?.answered === true) {
      setAnswered(true);
      const ansResponse = await getAnswer(petitionId);
      setAnswer(ansResponse?.data?.content || '');
    }
  };
  useEffect(() => {
    fetchPetition();
  }, []);
  const navigate = useNavigate();
  const vWriteAnswerProps = {
    answer,
    petition,
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
      setAnswer(event.target.value);
    },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isAnswered) {
        await putAnswer(petitionId, answer);
      } else {
        await postAnswer(petitionId, answer);
      }
      navigate('/answer');
    },
  };
  return (
    <>
      {/* <VAC name="VWriteAnswer" data={vWriteAnswerProps} /> */}
      <VWriteAnswer {...vWriteAnswerProps} />
    </>
  );
};

export default WriteAnswer;
