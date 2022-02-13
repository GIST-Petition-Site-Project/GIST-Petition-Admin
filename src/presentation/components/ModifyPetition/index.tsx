import getPetitionById from '@api/getPetitionById';
import putPetition from '@api/putPetition';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VAC from 'react-vac';
import VModifyPetition from './VModifyPetition';
import { Change, diffChars, diffWords } from 'diff';
import VChangeHighlight from './VChangeHighlight';
import styled from 'styled-components';

const Category = [
  '전체',
  '기숙사',
  '시설운영',
  '진로/취업',
  '학적/교과/장학',
  '학생지원/행사/동아리',
  '기획/예산/홍보',
  '대외협력',
  '권익소통',
  '기타',
];

const FlexWrap = styled.div`
  display: flex;
`;

const ModifyPetition = (): JSX.Element => {
  const { petitionId } = useParams();
  // const [petition, setPetition] = useState<Petition | undefined>();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [originalDescription, setOriginalDescription] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [changes, setChanges] = useState<Array<Change>>([]);

  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    // setPetition(response?.data || undefined);
    setTitle(response?.data?.title || '');
    setDescription(response?.data?.description || '');
    setOriginalDescription(response?.data?.description || '');
    if (response?.data?.categoryName) {
      const id = Category.indexOf(response?.data?.categoryName);
      setCategoryId(id);
    }
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
    // petition,
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
    <FlexWrap>
      <VModifyPetition {...vModifyPetitionProps} />
      <VChangeHighlight {...vChangeHighlightProps} />
      {/* <VAC name="VModifyPetition" data={vModifyPetitionProps} /> */}
    </FlexWrap>
  );
};

export default ModifyPetition;
