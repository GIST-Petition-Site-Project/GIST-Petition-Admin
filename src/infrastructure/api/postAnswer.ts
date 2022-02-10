import API from './baseAPI';
const postAnswer = async (petitionId: string | undefined, answer: string) => {
  if (!petitionId) return;
  const payload = { content: answer };
  const response = await API.post(`petitions/${petitionId}/answer`, payload);
  return response;
};

export default postAnswer;
