import { ChangeEvent, FormEvent, useState } from 'react';
import { postLogin, getUsersMe, postLogout } from '@api/userAPI';
import { setLogin, setUserRoleAdmin, setUserRoleManager } from '@stores/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/useStore';
import { useRoleInterceptor } from '@hooks/useInterceptor';
import VLoginForm from './VLoginForm';

const LoginForm = (): JSX.Element => {
  useRoleInterceptor();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const vLoginFormProps = {
    username,
    password,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === 'username') {
        setUsername(event.target.value);
      }
      if (event.target.name === 'password') {
        setPassword(event.target.value);
      }
    },
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const loginResponse = await postLogin(username, password);
      if (loginResponse.status === 204) {
        const meResponse = await getUsersMe();
        const role = meResponse?.data?.userRole;
        if (role === 'ADMIN' || role === 'MANAGER') {
          dispatch(setLogin());
          if (role === 'ADMIN') {
            dispatch(setUserRoleAdmin());
          } else {
            dispatch(setUserRoleManager());
          }
          if (location.hash) {
            navigate({ pathname: location.hash.replace('#', '') }, { replace: true });
          } else {
            navigate('/');
          }
        } else {
          await postLogout();
        }
      }
    },
  };

  return (
    <>
      <VLoginForm {...vLoginFormProps} />
      {/* <VAC name="VLoginForm" data={vLoginFormProps} /> */}
    </>
  );
};

export default LoginForm;
