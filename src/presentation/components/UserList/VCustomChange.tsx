import { StLine, StSelect } from '@components/common';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 90px;
  grid-column-gap: 2em;
  height: 64px;
  align-items: center;
  justify-content: center;
  height: 64px;
  :hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const EmailInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  border-radius: 5px;
  border: 0px;
  padding: 1em;
  outline: none;
  width: 100%;
  height: 100%;
  height: 1.5em;
  /* max-width: 500px; */
  ::placeholder {
    color: ${(props) => props.theme.colors.line};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.focus};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
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
  padding-left: 1em;
  color: ${(props) => props.theme.colors.text};
`;

const StRole = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

interface Props {
  email: string;
  customRole: string;
  handleEmailChange: any;
  handleRoleChange: any;
}

const VCustomChange = ({ email, customRole, handleEmailChange, handleRoleChange }: Props): JSX.Element => {
  const roles = ['USER', 'MANAGER', 'ADMIN'];
  return (
    <>
      <HeaderItem>
        <StP>이메일</StP>
        <StRole>역할</StRole>
      </HeaderItem>
      <StLine />
      <Grid>
        <EmailInput name="email" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요" />
        <StSelect onChange={handleRoleChange} value={customRole}>
          <option disabled={true}>선택</option>
          {roles.map((role) => {
            return <option key={role}>{role}</option>;
          })}
        </StSelect>
      </Grid>
    </>
  );
};

export default VCustomChange;
