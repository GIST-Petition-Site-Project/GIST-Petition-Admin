import { deletePetitionRelease } from '@api/petitionCommandAPI';
import { getPetitionById } from '@api/petitionQueryAPI';
import { BottomPadder, ButtonWrapper, StButton, Title, TitleWrapper, Wrapper } from '@components/common';
import VAnswer from '@components/common/VAnswer';
import VPetition from '@components/common/VPetition';
import VRejection from '@components/common/VRejection';
import { useToast } from '@hooks/useToast';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ManagePetition = (): JSX.Element => {
  const { petitionId } = useParams();
  const [petition, setPetition] = useState<Petition | undefined>();

  const fetchPetition = async () => {
    const petitionResponse = await getPetitionById(petitionId);
    setPetition(petitionResponse?.data);
  };

  useEffect(() => {
    fetchPetition();
  }, []);
  const toast = useToast();
  const withdrawPetition = async () => {
    await deletePetitionRelease(petition?.id);
    navigate('/');
    toast({ message: '승인이 취소되었습니다.', type: 'warning' });
  };

  const navigate = useNavigate();
  const navigateModify = () => {
    navigate(`/modify/${petitionId}`);
  };
  const navigateRevision = () => {
    navigate(`/revision/${petitionId}`);
  };
  const navigateAnswer = () => {
    navigate(`/answer/${petitionId}`);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>청원 관리</Title>
      </TitleWrapper>
      <VPetition petition={petition} />
      {petition?.answer ? (
        <>
          <TitleWrapper>
            <Title>답변 관리</Title>
          </TitleWrapper>
          <VAnswer answer={petition?.answer} />
        </>
      ) : null}
      {petition?.rejection ? (
        <>
          <TitleWrapper>
            <Title>반려 사유</Title>
          </TitleWrapper>
          <VRejection rejection={petition?.rejection} />
        </>
      ) : null}
      <ButtonWrapper>
        <StButton onClick={navigateModify}>청원 수정</StButton>
        {petition?.rejected ? null : <StButton onClick={withdrawPetition}>승인 취소</StButton>}
        {petition?.answer ? <StButton onClick={navigateAnswer}>답변 수정</StButton> : null}
        <StButton onClick={navigateRevision}>수정 이력</StButton>
      </ButtonWrapper>
      <BottomPadder />
    </Wrapper>
  );
};

export default ManagePetition;
