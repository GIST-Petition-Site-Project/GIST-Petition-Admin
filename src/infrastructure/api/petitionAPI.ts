import API from './baseAPI';

const getPetitions = async () => {
  const response = await API.get('petitions');
  return response;
};

const getPetitionById = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}`);
  return response;
};

const putPetition = async (petitionId: string | undefined, categoryId: number, title: string, description: string) => {
  if (!petitionId) return;
  console.log(title);
  const payload = {
    categoryId,
    title,
    description,
  };
  const response = await API.put(`petitions/${petitionId}`, payload);
  return response;
};

export { getPetitions, getPetitionById, putPetition };
