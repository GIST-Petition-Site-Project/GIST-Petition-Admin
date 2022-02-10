import API from './baseAPI';

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

export default putPetition;
