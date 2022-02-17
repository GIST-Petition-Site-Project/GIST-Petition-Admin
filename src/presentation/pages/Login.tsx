import LoginForm from '@components/LoginForm';
import { Wrapper } from '@components/common';

const Login = () => {
  return (
    <Wrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
