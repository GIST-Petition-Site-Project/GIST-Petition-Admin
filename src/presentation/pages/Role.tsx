import { Title, Wrapper } from '@components/common';
import UserList from '@components/UserList';

const Role = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>유저 역할 변경</Title>
      <UserList />
    </Wrapper>
  );
};
export default Role;
