import getPetitions from '@api/getPetitions';
import { useEffect, useState } from 'react';
import VAC from 'react-vac';
import VPetitionList from './VPetitionList';

const PetitionList = (): JSX.Element => {
  const [petitions, setPetitions] = useState<Array<Petition>>([]);
  const fetchPetitions = async () => {
    const response = await getPetitions();
    setPetitions(response[1]?.content);
  };
  useEffect(() => {
    fetchPetitions();
  }, []);

  const vPetitionListProps = {
    petitions,
  };

  return (
    <>
      <VAC name="VPetitionList" data={vPetitionListProps} />
      <VPetitionList {...vPetitionListProps} />
    </>
  );
};

export default PetitionList;
