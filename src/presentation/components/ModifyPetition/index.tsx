import { getPetitionById, putPetition } from '@api/petitionAPI';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VModifyPetition from './VModifyPetition';
import { Change, diffChars } from 'diff';
import VChangeHighlight from '@components/common/VChangeHighlight';
import styled from 'styled-components';
import { Wrapper, Title, StButton } from '@components/common';
import { useToast } from '@hooks/useToast';
import { useErrorInterceptor } from '@hooks/useInterceptor';

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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

const ModifyPetition = (): JSX.Element => {
  useErrorInterceptor();
  const { petitionId } = useParams();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [originalDescription, setOriginalDescription] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [titleChanges, setTitleChanges] = useState<Array<Change>>([]);
  const [descChanges, setDescChanges] = useState<Array<Change>>([]);
  const [status, setStatus] = useState(0);

  const toast = useToast();

  const fetchPetition = async () => {
    const response = await getPetitionById(petitionId);
    setTitle(response?.data?.title || '');
    setOriginalTitle(response?.data?.title || '');
    setDescription(response?.data?.description || '');
    setOriginalDescription(response?.data?.description || '');

    if (response?.data?.categoryName) {
      const id = Category.indexOf(response?.data?.categoryName);
      setCategoryId(id);
    }
  };

  useEffect(() => {
    fetchPetition();
  }, []);

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
  };
  const handleClick = async () => {
    switch (status) {
      case 0:
        setDescChanges(diffChars(originalDescription, description));
        setTitleChanges(diffChars(originalTitle, title));
        setStatus(1);
        break;
      case 1:
        const response = await putPetition(petitionId, categoryId, title, description);
        if (response?.status === 204) {
          toast({ message: '청원이 수정되었습니다', type: 'success' });
          navigate('/modify');
        }

        break;
    }
  };

  const handleCancleClick = () => {
    setStatus(0);
  };

  const vChangeHighlightProps = {
    titleChanges,
    descChanges,
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>청원 수정</Title>
        <ButtonWrapper>
          {status === 1 ? <StButton onClick={handleCancleClick}>수정 취소</StButton> : null}
          <StButton green onClick={handleClick}>
            {status === 0 ? '수정 완료' : '청원 수정'}
          </StButton>
        </ButtonWrapper>
      </TitleWrapper>
      {status === 0 ? <VModifyPetition {...vModifyPetitionProps} /> : <VChangeHighlight {...vChangeHighlightProps} />}
      {/* <VAC name="VModifyPetition" data={vModifyPetitionProps} /> */}
    </Wrapper>
  );
};

export default ModifyPetition;
