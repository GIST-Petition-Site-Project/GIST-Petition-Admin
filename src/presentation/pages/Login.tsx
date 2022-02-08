import LoginForm from '@components/LoginForm/LoginForm';
import { LoginTemplateBlock, WhiteBox } from './style';

const Login = () => {
  return (
    <LoginTemplateBlock>
      <WhiteBox>
        <LoginForm />
      </WhiteBox>
    </LoginTemplateBlock>
  );
};

export default Login;
