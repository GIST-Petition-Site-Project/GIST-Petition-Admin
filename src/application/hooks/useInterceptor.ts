import { useEffect } from 'react';
import API from '@api/baseAPI';
import { useNavigate } from 'react-router-dom';
import { useAppSelect, useAppDispatch } from './useStore';
import { setLogout } from '@stores/authSlice';
import { useToast } from './useToast';

/**
 * @description Hooks an axios interceptor when response.status===401
 */
const useInterceptor = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  useEffect(() => {
    const unauthInterceptor = API.interceptors.response.use(
      (response) => {
        if (response.status === 401) {
          toast({ message: '세션이 만료되었습니다', type: 'warning' });
          dispatch(setLogout());
          navigate('/login');
        }
        if (response.status === 403) {
          toast({ message: '권한이 없습니다', type: 'warning' });
          dispatch(setLogout());
          navigate('/login');
        }
        return response;
      },
      (error) => {
        return error;
      },
    );

    return () => {
      API.interceptors.response.eject(unauthInterceptor);
    };
  });
};

export const useRoleInterceptor = () => {
  const toast = useToast();
  const isAuthorized = useAppSelect((select) => select.auth.isAuthorized);
  useEffect(() => {
    const roleInterceptor = API.interceptors.response.use(
      (response) => {
        if (response.status === 401 && isAuthorized) {
          toast({ message: response.data.message, type: 'warning' });
        } else if (response.status >= 400 && !isAuthorized) {
          toast({ message: response.data.message, type: 'warning' });
        }
        if (response?.data?.userRole === 'USER') {
          toast({ message: '관리자 권한이 없습니다', type: 'warning' });
        } else if (response?.data?.userRole) {
          toast({ message: `${response.data.userRole} 환영합니다.`, type: 'success' });
        }
        return response;
      },
      (error) => {
        return error;
      },
    );

    return () => {
      API.interceptors.response.eject(roleInterceptor);
    };
  });
};

export default useInterceptor;
