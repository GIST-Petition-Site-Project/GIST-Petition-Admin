import { getPetitions } from '@api/petitionAPI';
import { useEffect, useState } from 'react';
import VPetitionList from './VPetitionList';

const PetitionList = (): JSX.Element => {
  const [petitions, setPetitions] = useState<Array<Petition>>([]);
  const fetchPetitions = async () => {
    const response = await getPetitions();
    setPetitions(response?.data?.content);
  };
  useEffect(() => {
    fetchPetitions();
  }, []);

  const vPetitionListProps = {
    petitions,
  };

  return (
    <>
      <VPetitionList {...vPetitionListProps} />
    </>
  );
};

export default PetitionList;
