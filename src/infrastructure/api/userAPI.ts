import API from './baseAPI';

const getUsers = async () => {
  const response = await API.get('users');
  return response;
};

const getUsersMe = async () => {
  const response = await API.get('users/me');
  return response;
};

const postLogin = async (username: string, password: string) => {
  const payload = { username, password };
  const response = await API.post('login', payload);
  return response;
};

const postLogout = async () => {
  const response = await API.post('logout', null);
  return response;
};

const putUserRole = async (id: number, userRole: string) => {
  const payload = { userRole };
  const response = await API.put(`users/${id}/userRole`, payload);
  return response;
};

export { getUsers, getUsersMe, postLogin, postLogout, putUserRole };
