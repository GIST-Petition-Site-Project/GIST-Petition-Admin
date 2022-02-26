import API from './baseAPI';

/**
 * @description 등록된 유저를 조회를 조회합니다.
 * @pagination
 */
const getUsers = async () => {
  const response = await API.get(`users${location.search}`);
  return response;
};

/**
 * @description 로그인된 세션의 유저 정보를 조회합니다.
 */
const getUsersMe = async () => {
  const response = await API.get('users/me');
  return response;
};

/**
 * @description 로그인 요청합니다.
 */
const postLogin = async (username: string, password: string) => {
  const payload = { username, password };
  const response = await API.post('login', payload);
  return response;
};

/**
 * @description 로그아웃 요청합니다.
 */
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
