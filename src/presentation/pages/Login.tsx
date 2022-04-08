import LoginForm from '@components/LoginForm';
import { Wrapper } from '@components/common';
import styled from 'styled-components';

const LoginWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;
