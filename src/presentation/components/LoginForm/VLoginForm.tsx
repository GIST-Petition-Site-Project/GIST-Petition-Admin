import { StButton } from '@components/common';
import styled from 'styled-components';
interface vLoginFormProps {
  username: string;
  password: string;
  handleSubmit: any;
  handleChange: any;
}

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 24px;
  margin-top: 36px;
  margin-bottom: 36px;
`;

const SInput = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  border: 1px solid ${(props) => props.theme.colors.text};
  padding: 1em;
  margin-bottom: 2em;
  outline: none;
  width: 100%;
  transition: 0.2s;
`;

const FormWrapper = styled.div`
  height: 80vh;
  padding: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const VLoginForm = ({ username, password, handleSubmit, handleChange }: vLoginFormProps): JSX.Element => {
  return (
    <FormWrapper>
      <Title>관리자 로그인</Title>
      <form onSubmit={handleSubmit}>
        <SInput
          autoComplete="username"
          name="username"
          placeholder="id"
          value={username}
          onChange={handleChange}
          required
        />
        <SInput
          autoComplete="new-password"
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <StButton style={{ margin: 'auto', float: 'right', width: '150px' }} type="submit">
          Login
        </StButton>
      </form>
    </FormWrapper>
  );
};

export default VLoginForm;
