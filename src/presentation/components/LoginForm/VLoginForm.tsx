import SButton from '@components/common/Button';
import { SInput, LoginFormBlock } from './style';

interface vLoginFormProps {
  username: string;
  password: string;
  handleSubmit: any;
  handleChange: any;
}

const VLoginForm = ({ username, password, handleSubmit, handleChange }: vLoginFormProps): JSX.Element => {
  return (
    <LoginFormBlock>
      <h3>관리자 로그인</h3>
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
        <SButton type="submit" primary full style={{ marginTop: '1rem' }}>
          Login
        </SButton>
      </form>
    </LoginFormBlock>
  );
};

export default VLoginForm;
