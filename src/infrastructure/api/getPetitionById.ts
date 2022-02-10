import API from './baseAPI';

const getPetitionById = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}`);
  return response;
};

export default getPetitionById;
