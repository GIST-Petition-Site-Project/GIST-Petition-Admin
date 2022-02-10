import API from './baseAPI';

const putUserRole = async (id: number, userRole: string) => {
  const payload = { userRole };
  const response = await API.put(`users/${id}/userRole`, payload);
  return response;
};

export default putUserRole;
