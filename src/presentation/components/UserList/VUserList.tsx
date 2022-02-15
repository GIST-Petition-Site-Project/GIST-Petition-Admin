import PALETTE from '@styles/palette';
import styled from 'styled-components';

interface vUserListProps {
  users: Array<User>;
  each: any;
}

const StUl = styled.ul`
  line-height: 40px;
`;

const Useritem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StP = styled.p`
  color: white;
`;

const StLine = styled.hr`
  color: white;
  border-color: white;
  background-color: white;
  opacity: 0.1;
`;

const StSelect = styled.select`
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  height: 30px;
  padding: 0.5em;
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
