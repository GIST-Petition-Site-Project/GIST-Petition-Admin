import { CancelToken, CancelTokenSource } from 'axios';
import API from './baseAPI';

/**
 * @description 청원 ID 통해 사전 동의 중인 청원의 정보를 가져옵니다.
 * 게시된 청원일 경우에만 유효한 요청입니다.
 */
export const getPetitionById = async (petitionId: string | number | undefined) => {
  if (!petitionId) return;
  const response = await API.get(`petitions/${petitionId}`);
  return response;
};

/**
 * @description tempURL을 통해 사전 동의 중인 청원의 정보를 가져옵니다.
 */
export const getTempPetition = async (tempURL: string | number | undefined) => {
  if (!tempURL) return;
  const response = await API.get(`petitions/temp/${tempURL}`);
  return response;
};

interface ISource {
  source: CancelTokenSource;
}
/**
 * @description 게시된 청원들을 가져옵니다.
 * @pagination size, page
 */
export const getPetitions = async ({ source }: ISource) => {
  const response = await API.get(`petitions${location.search}`, {
    cancelToken: source.token,
  });
  return response;
};

/**
 * @description 승인을 대기중인 청원의 개수를 가져옵니다.
 */
export const getWaitingRelease = async ({ source }: ISource) => {
  const response = await API.get(`petitions/waitingForRelease${location.search}`, {
    cancelToken: source.token,
  });
  return response;
};

/**
 * @description 답변을 기다리는 청원들을 가져옵니다.
 * @pagination size, page
 */
export const getWaitingAnswer = async ({ source }: ISource) => {
  const response = await API.get(`petitions/waitingForAnswer${location.search}`, {
    cancelToken: source.token,
  });
  return response;
};

/**
 * @description 답변이 등록된 청원들을 가져옵니다.
 * @pagination size, page
 */
export const getAnswered = async ({ source }: ISource) => {
  const response = await API.get(`petitions/answered${location.search}`, {
    cancelToken: source.token,
  });
  return response;
};

/**
 * @description 반려된 청원들을 가져옵니다.
 * @pagination size, page
 */
export const getRejected = async ({ source }: ISource) => {
  const response = await API.get(`petitions/rejected${location.search}`, {
    cancelToken: source.token,
  });
  return response;
};

/**
 * @description 승인 대기중인 청원의 개수를 가져옵니다.
 */
export const getWaitingReleaseCount = async () => {
  const response = await API.get('/petitions/waitingForRelease/count');
  return response;
};

/**
 * @description 답변을 대기중인 청원의 개수를 가져옵니다.
 */
export const getWaitingAnswerCount = async () => {
  const response = await API.get('/petitions/waitingForAnswer/count');
  return response;
};

/**
 * @description 청원의 수정 이력을 가져옵니다.
 */
export const getPetitionRevisions = async (petitionId: string | number | undefined) => {
  const response = await API.get(`petitions/${petitionId}/revisions`);
  return response;
};
