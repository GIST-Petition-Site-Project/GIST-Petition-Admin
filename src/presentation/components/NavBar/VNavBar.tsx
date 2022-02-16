import logo from '@assets/img/logo_dark.svg';
import styled from 'styled-components';
import PALETTE from '@styles/palette';

const NavBarBlock = styled.div`
  color: white;
  height: 50px;
  position: sticky;
  top: 0px;
  border-bottom: #444 1px solid;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  position: absolute;
  left: 5%;
  top: 0;
  bottom: 0;
  margin: auto;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 5%;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Role = styled.p`
  font-size: 15px;
`;

const LogoutBtn = styled.button`
  cursor: pointer;
  font-family: Pretendard;
  padding: 6px;
  margin-left: 20px;
  background-color: transparent;
  color: white;
  border: 0px;
  border-radius: 40px;
  font-size: 15px;
  transition: background-color 0.4s;
  :hover {
    background-color: ${PALETTE.PRIMARY_RED};
  }
`;
interface vNavBarProps {
  role: string;
  handleClick: any;
}

const VNavBar = ({ handleClick, role }: vNavBarProps): JSX.Element => {
  // const role = 'ADMIN';
  return (
    <NavBarBlock>
      <a href="/">
        <Logo src={logo} alt="logo" />
      </a>
      <Menu>
        <Role>{role}</Role>
        <LogoutBtn onClick={handleClick}>LOGOUT</LogoutBtn>
      </Menu>
    </NavBarBlock>
  );
};

export default VNavBar;
