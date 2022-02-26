import { getTempPetition, postPetitionRelease } from '@api/petitionAPI';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@hooks/useToast';
import styled from 'styled-components';
import { BottomPadder, StButton, Title, Wrapper } from '@components/common';
import ModifyPetition from '@components/ModifyPetition';
import { useLoadingInterceptor } from '@hooks/useInterceptor';
import VPetition from '@components/common/VPetition';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const ApprovePetition = (): JSX.Element => {
  const isLoading = useLoadingInterceptor();
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const [isModifying, setIsModifying] = useState(false);
  const fetchPetition = async () => {
    const response = await getTempPetition(petitionId);
    setPetition(response?.data);
  };
  useEffect(() => {
    fetchPetition();
  }, []);

  const navigate = useNavigate();
  const fireToast = useToast();

  const handleClick = async () => {
    await postPetitionRelease(petition?.id);
    navigate('/approve');
    fireToast({ message: '청원이 게시되었습니다.', type: 'success' });
  };

  const handleModify = () => {
    setIsModifying(!isModifying);
  };

  const VModifyPetitionProps = {
    petition,
  };

  return (
    <Wrapper>
      <Title>청원 승인</Title>
      <VPetition petition={petition} />
      {isModifying ? <ModifyPetition {...VModifyPetitionProps} /> : null}
      {isModifying ? null : (
        <ButtonWrapper>
          <StButton onClick={handleModify}>청원 수정</StButton>
          <StButton onClick={handleClick}>청원 승인</StButton>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default ApprovePetition;
