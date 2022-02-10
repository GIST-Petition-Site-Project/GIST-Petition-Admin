import API from './baseAPI';
const postLogout = async () => {
  const response = await API.post('logout', null);
  return response.status;
};

export default postLogout;
