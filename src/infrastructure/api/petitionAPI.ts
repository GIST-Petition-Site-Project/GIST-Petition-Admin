import API from './baseAPI';

const getPetitions = async () => {
  const response = await API.get('petitions?size=100');
  return response;
};

const getPetitionById = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}`);
  return response;
};

const getTempPetition = async (tempURL: string | undefined) => {
  if (!tempURL) return;
  const response = await API.get(`petitions/temp/${tempURL}`);
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

const postPetitionRelease = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.post(`petitions/${petitionId}/release`);
  return response;
};

const getPeitionsWaiting = async () => {
  const response = await API.get('petitions/waitingForCheck?size=100');
  return response;
};

export { getPetitions, getPetitionById, putPetition, postPetitionRelease, getPeitionsWaiting, getTempPetition };
