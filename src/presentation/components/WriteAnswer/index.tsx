import { getPetitionById } from '@api/petitionQueryAPI';
import { postAnswer, putAnswer } from '@api/answerAPI';
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
  const [videoUrl, setVideoUrl] = useState('');

  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setPetition(response?.data);
    setAnswer(response?.data?.answer?.description || '');
    setVideoUrl(response?.data?.answer?.videoUrl);
  };

  useEffect(() => {
    fetchPetition();
  }, []);

  const navigate = useNavigate();
  const vWriteAnswerProps = {
    answer,
    petition,
    videoUrl,
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (event.target.className.includes('answer')) setAnswer(event.target.value);
      if (event.target.className.includes('videoUrl')) setVideoUrl(event.target.value);
    },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (petition?.answered) {
        const putResponse = await putAnswer(petitionId, answer, videoUrl);
        if (putResponse?.status === 200) {
          toast({ message: '답변을 수정하였습니다', type: 'success' });
          navigate(`/manage/${petitionId}`);
        }
      } else {
        const postResponse = await postAnswer(petitionId, answer, videoUrl);
        if (postResponse?.status === 201) {
          toast({ message: '답변을 게시하였습니다', type: 'success' });
          navigate(`/manage/${petitionId}`);
        }
      }
    },
  };
  return (
    <>
      <VWriteAnswer {...vWriteAnswerProps} />
    </>
  );
};

export default WriteAnswer;
