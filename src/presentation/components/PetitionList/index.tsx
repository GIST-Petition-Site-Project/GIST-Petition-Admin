import { getWaitingRelease, getPetitions, getWaitingAnswer } from '@api/petitionAPI';
import { useLoadingInterceptor } from '@hooks/useInterceptor';
import { useEffect, useState } from 'react';
import VPetitionList from './VPetitionList';

interface IPetitionList {
  type?: any;
}

const PetitionList = ({ type }: IPetitionList): JSX.Element => {
  const isLoading = useLoadingInterceptor();
  const [petitions, setPetitions] = useState<Array<Petition>>([]);
  const fetchPetitions = async () => {
    switch (type) {
      case 'release':
        const responseRelease = await getWaitingRelease();
        setPetitions(responseRelease?.data?.content);
        break;
      case 'answer':
        const responseAnswer = await getWaitingAnswer();
        setPetitions(responseAnswer?.data?.content);
        break;
      default:
        const response = await getPetitions();
        setPetitions(response?.data?.content);
    }
  };
  useEffect(() => {
    fetchPetitions();
  }, []);

  const vPetitionListProps = {
    isLoading,
    type,
    petitions,
  };

  return (
    <>
      {/* {isLoading ? <div>요청중</div> : null} */}
      <VPetitionList {...vPetitionListProps} />
    </>
  );
};

export default PetitionList;
