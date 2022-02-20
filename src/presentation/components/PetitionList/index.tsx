import { getWaitingRelease, getPetitions, getWaitingAnswer } from '@api/petitionAPI';
import { useEffect, useState } from 'react';
import VPetitionList from './VPetitionList';

interface IPetitionList {
  type?: any;
}

const PetitionList = ({ type }: IPetitionList): JSX.Element => {
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
    type,
    petitions,
  };

  return (
    <>
      <VPetitionList {...vPetitionListProps} />
    </>
  );
};

export default PetitionList;
