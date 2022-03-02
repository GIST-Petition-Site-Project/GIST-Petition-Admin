import API from './baseAPI';

/**
 * @description 청원에 등록된 답변을 가져옵니다.
 */
const getAnswer = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}/answer`);
  return response;
};

/**
 * @description 청원에 답변을 등록합니다.
 */
const postAnswer = async (petitionId: string | undefined, answer: string) => {
  if (!petitionId) return;
  const payload = { content: answer };
  const response = await API.post(`petitions/${petitionId}/answer`, payload);
  return response;
};

/**
 * @description 청원에 등록된 답변을 수정합니다.
 */
const putAnswer = async (petitionId: string | undefined, answer: string) => {
  if (!petitionId) return;
  const payload = { content: answer };
  const response = await API.put(`petitions/${petitionId}/answer`, payload);
  return response;
};

/**
 * @description 청원 수정 기록을 가져옵니다.
 */
const getAnswerRevisions = async (answerId: string | number | undefined) => {
  if (!answerId) return;
  const response = await API.get(`answers/${answerId}/revisions`);
  return response;
};

export { getAnswer, postAnswer, putAnswer, getAnswerRevisions };
