import API from './baseAPI';

const getUsers = async () => {
  const response = await API.get('users');
  return response;
};

export default getUsers;
