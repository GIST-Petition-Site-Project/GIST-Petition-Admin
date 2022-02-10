import API from './baseAPI';

const getPetitions = async () => {
  const response = await API.get('petitions');
  return [response.status, response.data];
};

export default getPetitions;
