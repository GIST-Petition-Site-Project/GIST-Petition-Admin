import getPetitionById from '@api/getPetitionById';
import putPetition from '@api/putPetition';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VAC from 'react-vac';
import VModifyPetition from './VModifyPetition';

const ModifyPetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setPetition(response?.data || undefined);
    setTitle(response?.data?.title || '');
    setDescription(response?.data?.description || '');
    setCategoryId(response?.data?.categoryId || 0);
  };

  useEffect(() => {
    fetchPetition();
  }, []);
  const navigate = useNavigate();
  const vModifyPetitionProps = {
    petition,
    title,
    description,
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(event.target.name, title);
      if (event.target.name === 'title') {
        setTitle(event.target.value);
      }
      if (event.target.name === 'description') {
        setDescription(event.target.value);
      }
    },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await putPetition(petitionId, categoryId, title, description);
      navigate('/modify');
    },
  };

  return (
    <>
      <VModifyPetition {...vModifyPetitionProps} />
      <VAC name="VModifyPetition" data={vModifyPetitionProps} />
    </>
  );
};

export default ModifyPetition;
