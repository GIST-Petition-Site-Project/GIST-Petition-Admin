import API from './baseAPI';

const getAnswer = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}/answer`);
  return response;
};

export default getAnswer;
