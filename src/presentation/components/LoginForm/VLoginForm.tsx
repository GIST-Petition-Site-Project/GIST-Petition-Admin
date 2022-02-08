import SButton from '@components/common/Button';
import { SInput, LoginFormBlock } from './style';
import { FormEvent } from 'react';

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  console.log(e.target);
};

const onClick = () => {
  console.log('onClick');
};

const VLoginForm = (): JSX.Element => {
  return (
    <LoginFormBlock>
      <h3>관리자 로그인</h3>
      <form onSubmit={onSubmit}>
        <SInput autoComplete="username" name="username" placeholder="id" />
        <SInput autoComplete="new-password" name="password" placeholder="password" type="password" />
      </form>
      <SButton primary full style={{ marginTop: '1rem' }} onClick={onClick}>
        Login
      </SButton>
    </LoginFormBlock>
  );
};

export default VLoginForm;
