import API from './baseAPI';

/**
 * @description 청원의 제목, 카테고리, 내용을 수정합니다.
 */
export const putPetition = async (
  petitionId: string | undefined,
  categoryId: number,
  title: string,
  description: string,
) => {
  if (!petitionId) return;
  const payload = {
    categoryId,
    title,
    description,
  };
  const response = await API.put(`petitions/${petitionId}`, payload);
  return response;
};

/**
 * @description 사전 동의중인 청원을 게시합니다.
 */
export const postPetitionRelease = async (petitionId: string | number | undefined) => {
  if (!petitionId) return;
  const response = await API.post(`petitions/${petitionId}/release`);
  return response;
};

/**
 * @description 사전 동의중인 청원을 반려합니다.
 */
export const deletePetitionRelease = async (petitionId: string | number | undefined) => {
  if (!petitionId) return;
  const response = await API.delete(`petitions/${petitionId}/release`);
  return response;
};

/**
 * @description 청원을 반려합니다.
 */
export const postPetitionRejection = async (petitionId: string | number | undefined, description: string) => {
  const payload = {
    description,
  };
  const response = await API.post(`petitions/${petitionId}/rejection`, payload);
  return response;
};

export const putPetitionRejection = async (petitionId: string | number | undefined, description: string) => {
  const payload = {
    description,
  };
  const response = await API.put(`petitions/${petitionId}/rejection`, payload);
  return response;
};

export const deletePetitionRejection = async (petitionId: string | number | undefined) => {
  const response = await API.delete(`petitions/${petitionId}/rejection`);
  return response;
};
