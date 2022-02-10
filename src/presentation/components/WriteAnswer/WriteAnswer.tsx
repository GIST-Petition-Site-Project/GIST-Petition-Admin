import { useParams } from 'react-router-dom';

const WriteAnswer = (): JSX.Element => {
  const { petitionId } = useParams();
  console.log(petitionId);
  return <></>;
};

export default WriteAnswer;
