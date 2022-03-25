import { useAppSelect } from '@hooks/useStore';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthRoute = ({ type }: { type: 'AUTH' | 'ADMIN' | 'MANAGER' }): never | JSX.Element => {
  const auth = useAppSelect((select) => select.auth.isAuthorized);
  const role = useAppSelect((select) => select.auth.role);
  const navigate = useNavigate();
  useEffect(() => {
    switch (type) {
      case 'AUTH':
        if (!auth) {
          navigate({ pathname: '/login', hash: location.pathname }, { replace: true });
        }
        break;

      case 'MANAGER':
        if (!auth) {
          navigate({ pathname: '/login', hash: location.pathname }, { replace: true });
          break;
        }
        if (role !== 'ADMIN' && role !== 'MANAGER') {
          navigate('/', { replace: true });
        }
        break;

      case 'ADMIN':
        if (!auth) {
          navigate({ pathname: '/login', hash: location.pathname }, { replace: true });
          break;
        }
        if (role !== 'ADMIN') {
          navigate('/', { replace: true });
        }
        break;
    }
    return;
  }, [auth]);

  return <Outlet />;
};

export { AuthRoute };
