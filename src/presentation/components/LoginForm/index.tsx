import { ChangeEvent, FormEvent, useState } from 'react';
import VLoginForm from './VLoginForm';
import { postLogin, getUsersMe, postLogout } from '@api/userAPI';
import { setLogin, setUserRole } from '@stores/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/useStore';
import { useRoleInterceptor } from '@hooks/useInterceptor';

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
        if (meResponse?.data?.userRole === 'ADMIN' || meResponse?.data?.userRole === 'MANAGER') {
          dispatch(setLogin());
          dispatch(setUserRole(meResponse.data.userRole));
          navigate('/');
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
