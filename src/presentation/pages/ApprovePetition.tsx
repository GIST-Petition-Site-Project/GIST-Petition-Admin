import { getTempPetition, postPetitionRelease } from '@api/petitionAPI';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@hooks/useToast';
import styled from 'styled-components';
import { BottomPadder, StButton, Title, Wrapper } from '@components/common';
import ModifyPetition from '@components/ModifyPetition';
import VPetition from '@components/common/VPetition';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { onModifying } from '@stores/modifySlice';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const ApprovePetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();
  const isModifying = useAppSelect((select) => select.modify.isModifying);
  const dispatch = useAppDispatch();
  const fetchPetition = async () => {
    const response = await getTempPetition(petitionId);
    setPetition(response?.data);
  };
  useEffect(() => {
    fetchPetition();
  }, [isModifying]);

  const navigate = useNavigate();
  const fireToast = useToast();

  const handleClick = async () => {
    await postPetitionRelease(petition?.id);
    navigate('/approve');
    fireToast({ message: '청원이 게시되었습니다.', type: 'success' });
  };

  const handleModify = () => {
    dispatch(onModifying());
    window.scrollTo(0, 0);
  };

  const VModifyPetitionProps = {
    petition,
  };

  return (
    <>
      {isModifying ? <ModifyPetition {...VModifyPetitionProps} /> : null}
      <Wrapper>
        {isModifying ? null : (
          <>
            <Title>청원 승인</Title>
            <VPetition petition={petition} />
            <ButtonWrapper>
              <StButton onClick={handleModify}>청원 수정</StButton>
              <StButton onClick={handleClick}>청원 승인</StButton>
            </ButtonWrapper>
          </>
        )}
        <BottomPadder />
      </Wrapper>
    </>
  );
};

export default ApprovePetition;
