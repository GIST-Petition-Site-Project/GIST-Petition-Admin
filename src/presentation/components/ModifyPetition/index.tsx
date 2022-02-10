import getPetitionById from '@api/getPetitionById';
import putPetition from '@api/putPetition';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VAC from 'react-vac';
import VModifyPetition from './VModifyPetition';
import { Change, diffChars, diffWords } from 'diff';
import VChangeHighlight from './VChangeHighlight';

const ModifyPetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [originalDescription, setOriginalDescription] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [changes, setChanges] = useState<Array<Change>>([]);

  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setPetition(response?.data || undefined);
    setTitle(response?.data?.title || '');
    setDescription(response?.data?.description || '');
    setOriginalDescription(response?.data?.description || '');
    setCategoryId(response?.data?.categoryId || 0);
    console.log(response?.data?.description);
  };

  useEffect(() => {
    fetchPetition();
  }, []);

  useEffect(() => {
    setChanges(diffChars(originalDescription, description));
  }, [description]);

  const navigate = useNavigate();
  const vModifyPetitionProps = {
    petition,
    title,
    description,
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
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

  const vChangeHighlightProps = {
    changes,
  };

  return (
    <>
      <VModifyPetition {...vModifyPetitionProps} />
      <div>test</div>
      <VChangeHighlight {...vChangeHighlightProps} />
      {/* <VAC name="VModifyPetition" data={vModifyPetitionProps} /> */}
    </>
  );
};

export default ModifyPetition;
