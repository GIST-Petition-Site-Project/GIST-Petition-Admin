import API from './baseAPI';

export const getUsersMe = async () => {
  const response = await API.get('users/me');
  return response;
};
