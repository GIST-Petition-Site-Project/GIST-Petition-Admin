import LoginForm from '@components/LoginForm';
import { Wrapper } from '@components/common';
import styled from 'styled-components';

const LoginWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mail = styled.div`
  font-size: 0.8em;
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  opacity: 0.5;
  color: ${(props) => props.theme.colors.text};
  a {
    color: ${(props) => props.theme.colors.text};
    /* text-decoration: none; */
  }
`;

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
      <Mail>
        버그 및 기능 개선 문의: <a href="mailto:sanbada79@naver.com">sanbada79@naver.com</a>
      </Mail>
    </>
  );
};

export default Login;
