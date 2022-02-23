import { getPetitionById } from '@api/petitionAPI';
import { getAnswer, postAnswer, putAnswer } from '@api/answerAPI';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VWriteAnswer from './VWriteAnswer';
import { useToast } from '@hooks/useToast';
import { useErrorInterceptor } from '@hooks/useInterceptor';

const WriteAnswer = (): JSX.Element => {
  useErrorInterceptor();
  const toast = useToast();
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
    isAnswered,
    answer,
    petition,
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
      setAnswer(event.target.value);
    },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isAnswered) {
        const putResponse = await putAnswer(petitionId, answer);
        if (putResponse?.status === 200) {
          toast({ message: '답변을 수정하였습니다', type: 'success' });
        }
      } else {
        const postResponse = await postAnswer(petitionId, answer);
        if (postResponse?.status === 201) {
          toast({ message: '답변을 게시하였습니다', type: 'success' });
        }
      }
      navigate('/answer');
    },
  };
  return (
    <>
      <VWriteAnswer {...vWriteAnswerProps} />
    </>
  );
};

export default WriteAnswer;
