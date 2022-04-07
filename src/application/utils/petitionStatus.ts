const checkPetitionStatus = (
  released: boolean,
  agreeCount: number,
  answered: boolean,
  rejected: boolean,
  expired: boolean,
): PetitionStatus => {
  /**
   * @description 답변을 요청하기 위한 최소 동의 수
   */
  const REQUIRED_AGREEMENT_COUNTS = 50;
  if (!released) return '승인 대기중';
  if (rejected) return '승인 반려';
  if (answered) return '답변 완료';
  if (expired) return '청원 만료';
  return agreeCount > REQUIRED_AGREEMENT_COUNTS ? '답변 대기중' : '청원 진행중';
};

export default checkPetitionStatus;
