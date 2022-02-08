import { VAC, VACInput } from 'react-vac';
import VLoginForm from './VLoginForm';
const LoginForm = (): JSX.Element => {
  return (
    <>
      <VLoginForm />
      <VACInput name="VLoginForm" />
    </>
  );
};

export default LoginForm;
