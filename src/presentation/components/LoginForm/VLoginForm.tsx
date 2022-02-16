import styled from 'styled-components';
interface vLoginFormProps {
  username: string;
  password: string;
  handleSubmit: any;
  handleChange: any;
}

const LoginFormBlock = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: black;
    margin-bottom: 1rem;
  }
`;

const SInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &.focus {
    color: $oc-teal-7;
    border-bottom: 1px solid gray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const VLoginForm = ({ username, password, handleSubmit, handleChange }: vLoginFormProps): JSX.Element => {
  return (
    <LoginFormBlock>
      <h3>지스트 청원 관리자</h3>
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
        <button type="submit">Login</button>
      </form>
    </LoginFormBlock>
  );
};

export default VLoginForm;
