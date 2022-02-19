import { StLine } from '@components/common';
import styled from 'styled-components';

interface vUserListProps {
  users: Array<User>;
  each: any;
}

const StUl = styled.ul`
  line-height: 50px;
`;

const Useritem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  :hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const StP = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

const StSelect = styled.select`
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  height: 30px;
  padding: 0.5em;
  margin-right: 1px;
  border-radius: 5px;
  text-align: center;
`;

const VUserList = ({ users, each }: vUserListProps): JSX.Element => {
  const roles = ['USER', 'MANAGER', 'ADMIN'];
  return (
    <StUl>
      <StLine />
      {users?.map((user) => {
        const { id, username, userRole, handleChange } = each(user);
        return (
          <div key={'user_item_' + id}>
            <Useritem>
              <StP>{username}</StP>
              <StSelect onChange={handleChange} value={userRole}>
                {roles.map((role) => {
                  return <option key={id + role}>{role}</option>;
                })}
              </StSelect>
            </Useritem>
            <StLine />
          </div>
        );
      })}
    </StUl>
  );
};

export default VUserList;
