import { ChangeEvent, FormEvent, useState } from 'react';
import { VAC } from 'react-vac';
import VLoginForm from './VLoginForm';
import postLogin from '@api/postLogin';
const LoginForm = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      postLogin(username, password);
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
