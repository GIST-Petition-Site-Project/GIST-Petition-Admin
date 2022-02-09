import API from './baseAPI';

const postLogin = async (username: string, password: string) => {
  const payload = { username, password };
  const response = await API.post('login', payload);
  return response.status;
};

export default postLogin;
