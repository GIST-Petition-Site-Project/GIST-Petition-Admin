import API from './baseAPI';

export const getPetitions = async () => {
  const response = await API.get('petitions?size=100');
  return response;
};

export const getPetitionById = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}`);
  return response;
};

export const getTempPetition = async (tempURL: string | undefined) => {
  if (!tempURL) return;
  const response = await API.get(`petitions/temp/${tempURL}`);
  return response;
};

export const putPetition = async (
  petitionId: string | undefined,
  categoryId: number,
  title: string,
  description: string,
) => {
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

export const postPetitionRelease = async (petitionId: string | undefined) => {
  if (!petitionId) return;
  const response = await API.post(`petitions/${petitionId}/release`);
  return response;
};

export const getWaitingRelease = async () => {
  const response = await API.get('petitions/waitingForRelease?size=100');
  return response;
};

export const getWaitingAnswer = async () => {
  const response = await API.get('petitions/waitingForAnswer?size=100');
  return response;
};

export const getAnswered = async () => {
  const response = await API.get('petitions/answered?size=100');
  return response;
};

export const getWaitingReleaseCount = async () => {
  const response = await API.get('/petitions/waitingForRelease/count');
  return response;
};

export const getWaitingAnswerCount = async () => {
  const response = await API.get('/petitions/waitingForAnswer/count');
  return response;
};

export const getPetitionRevisions = async (petitionId: string | undefined) => {
  const response = await API.get(`petitions/${petitionId}/revisions`);
  return response;
};
