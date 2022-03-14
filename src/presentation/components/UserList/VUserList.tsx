import { StLine, StSelect } from '@components/common';
import styled from 'styled-components';

interface vUserListProps {
  users: Array<User>;
  each: any;
}

const StUl = styled.ul`
  line-height: 1em;
`;

const Useritem = styled.li`
  display: grid;
  grid-template-columns: 1fr 90px;
  align-items: center;
  height: 64px;
  :hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const StP = styled.p`
  padding: 1em;
  color: ${(props) => props.theme.colors.text};
`;

const VUserList = ({ users, each }: vUserListProps): JSX.Element => {
  const roles = ['USER', 'MANAGER', 'ADMIN'];
  return (
    <>
      <StUl>
        <StLine />
        {users?.map((user, idx) => {
          const { username, userRole, handleChange } = each(user);
          return (
            <div key={'user_item_' + idx}>
              <Useritem>
                <StP>{username}</StP>
                <StSelect onChange={handleChange} value={userRole}>
                  {roles.map((role) => {
                    return <option key={idx + role}>{role}</option>;
                  })}
                </StSelect>
              </Useritem>
              <StLine />
            </div>
          );
        })}
      </StUl>
    </>
  );
};

export default VUserList;
