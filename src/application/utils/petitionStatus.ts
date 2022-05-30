const deprecatedCheckPetitionStatus = (petition?: Petition): PetitionStatus => {
  const REQUIRED_AGREEMENT_COUNTS = 50;
  if (!petition) return '청원 진행중';
  /**
   * @description 답변을 요청하기 위한 최소 동의 수
   */
  // if (!petition.released) return '승인 대기중';
  // if (petition.rejected) return '승인 반려됨';
  if (petition.answered) return '답변 완료됨';
  if (petition.expired) return '청원 만료됨';
  return petition.agreeCount >= REQUIRED_AGREEMENT_COUNTS ? '답변 대기중' : '청원 진행중';
};

const checkPetitionStatus = (petition?: Petition): PetitionStatus => {
  const REQUIRED_AGREEMENT_COUNTS = 50;
  if (!petition) return '청원 진행중';
  if (petition.status === 'TEMPORARY') return '사전 동의중';
  if (petition.status === 'RELEASED')
    return petition.agreeCount >= REQUIRED_AGREEMENT_COUNTS ? '답변 대기중' : '청원 진행중';
  if (petition.status === 'ANSWERED') return '답변 완료됨';
  if (petition.status === 'REJECTED') return '승인 반려됨';
  return '청원 진행중';
};

export default checkPetitionStatus;
