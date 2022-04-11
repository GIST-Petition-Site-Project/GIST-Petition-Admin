const checkPetitionStatus = (petition?: Petition): PetitionStatus => {
  if (!petition) return '청원 진행중';
  /**
   * @description 답변을 요청하기 위한 최소 동의 수
   */
  const REQUIRED_AGREEMENT_COUNTS = 50;
  if (!petition.released) return '승인 대기중';
  if (petition.rejected) return '승인 반려됨';
  if (petition.answered) return '답변 완료됨';
  if (petition.expired) return '청원 만료됨';
  return petition.agreeCount > REQUIRED_AGREEMENT_COUNTS ? '답변 대기중' : '청원 진행중';
};

export default checkPetitionStatus;
