import { getPetitionById, putPetition } from '@api/petitionAPI';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VModifyPetition from './VModifyPetition';
import { Change, diffChars } from 'diff';
import VChangeHighlight from '@components/common/VChangeHighlight';
import { Wrapper, Title, StButton, TitleWrapper, ButtonWrapper } from '@components/common';
import { useToast } from '@hooks/useToast';
import { useErrorInterceptor } from '@hooks/useInterceptor';
import { useAppDispatch } from '@hooks/useStore';
import { offModiying } from '@stores/modifySlice';

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

interface IModifyPetition {
  petition?: Petition;
}

// temp인 경우 props 로 petition 정보를 넣어줌, 공개된 청원일 경우 정보 가져옴
const ModifyPetition = ({ petition }: IModifyPetition): JSX.Element => {
  useErrorInterceptor();
  const { petitionId } = useParams();
  const [description, setDescription] = useState(petition?.description || '');
  const [originalDescription, setOriginalDescription] = useState(petition?.description || '');

  const [title, setTitle] = useState(petition?.title || '');
  const [originalTitle, setOriginalTitle] = useState(petition?.title || '');

  const [categoryId, setCategoryId] = useState(petition ? Category.indexOf(petition?.categoryName) : 0);
  // const [originalCategoryId, setOriginalCategoryId] = useState(petition ? Category.indexOf(petition?.categoryName) : 0);

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
    if (!petition) {
      fetchPetition();
    }
  }, []);

  const dispatch = useAppDispatch();
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

  const navigate = useNavigate();

  const handleClick = async () => {
    switch (status) {
      case 0:
        setDescChanges(diffChars(originalDescription, description));
        setTitleChanges(diffChars(originalTitle, title));
        setStatus(1);
        break;
      case 1:
        const response = await putPetition(petition ? String(petition.id) : petitionId, categoryId, title, description);
        if (response?.status === 204) {
          toast({ message: '청원이 수정되었습니다', type: 'success' });
        }
        if (location.pathname.includes('modify')) {
          navigate(`/manage/${petitionId}`);
        }
        dispatch(offModiying());
        window.scrollTo(0, 0);
        break;
    }
  };

  const handleCancel = () => {
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
          {status === 1 ? <StButton onClick={handleCancel}>수정 취소</StButton> : null}
          <StButton green onClick={handleClick}>
            {status === 0 ? '청원 수정' : '수정 완료'}
          </StButton>
        </ButtonWrapper>
      </TitleWrapper>
      {status === 0 ? <VModifyPetition {...vModifyPetitionProps} /> : <VChangeHighlight {...vChangeHighlightProps} />}
    </Wrapper>
  );
};

export default ModifyPetition;
