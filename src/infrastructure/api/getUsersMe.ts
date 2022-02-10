import API from './baseAPI';

const getUsersMe = async () => {
  const response = await API.get('users/me');
  return response;
};

export default getUsersMe;
