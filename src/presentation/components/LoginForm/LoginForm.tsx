import { ChangeEvent, FormEvent, useState } from 'react';
import { VAC } from 'react-vac';
import VLoginForm from './VLoginForm';
import postLogin from '@api/postLogin';
import { getUsersMe } from '@api/getUsersMe';
import { setLogin } from '@stores/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/store.hooks';

const LoginForm = (): JSX.Element => {
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
      await postLogin(username, password);
      const response = await getUsersMe();
      if (response?.data?.userRole === 'ADMIN') {
        dispatch(setLogin());
        navigate('/');
        console.log('WELCOME ADMIN');
      }
    },
  };
  return (
    <>
      <VLoginForm {...vLoginFormProps} />
      <VAC name="VLoginForm" data={vLoginFormProps} />
    </>
  );
};

export default LoginForm;
