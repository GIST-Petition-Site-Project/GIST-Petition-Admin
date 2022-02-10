import API from './baseAPI';
const putAnswer = async (petitionId: string | undefined, answer: string) => {
  if (!petitionId) return;
  const payload = { content: answer };
  const response = await API.put(`petitions/${petitionId}/answer`, payload);
  return response;
};

export default putAnswer;
