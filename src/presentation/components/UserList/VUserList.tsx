import { BottomPadder, StLine } from '@components/common';
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

const HeaderItem = styled(Useritem)`
  height: 2em;
`;

const StP = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

const StRole = styled(StP)`
  text-align: center;
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
    <>
      <StUl>
        <HeaderItem>
          <StP>이메일</StP>
          <StRole>역할</StRole>
        </HeaderItem>
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
    </>
  );
};

export default VUserList;
