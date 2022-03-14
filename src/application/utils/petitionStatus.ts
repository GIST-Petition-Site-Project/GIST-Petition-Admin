const checkPetitionStatus = (released: boolean, agreeCount: number, answered: boolean): PetitionStatus => {
  /**
   * @description 답변을 요청하기 위한 최소 동의 수
   */
  const REQUIRED_AGREEMENT_COUNTS = 50;

  if (!released) return '승인 대기중';
  if (answered) return '답변 완료';
  console.log(agreeCount);
  if (agreeCount < REQUIRED_AGREEMENT_COUNTS) return '청원 진행중';
  else return '답변 대기중';
};

export default checkPetitionStatus;
