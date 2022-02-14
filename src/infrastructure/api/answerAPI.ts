import API from './baseAPI';

const getAnswer = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}/answer`);
  return response;
};

const postAnswer = async (petitionId: string | undefined, answer: string) => {
  if (!petitionId) return;
  const payload = { content: answer };
  const response = await API.post(`petitions/${petitionId}/answer`, payload);
  return response;
};

const putAnswer = async (petitionId: string | undefined, answer: string) => {
  if (!petitionId) return;
  const payload = { content: answer };
  const response = await API.put(`petitions/${petitionId}/answer`, payload);
  return response;
};

export { getAnswer, postAnswer, putAnswer };
