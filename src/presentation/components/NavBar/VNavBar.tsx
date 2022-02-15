import logo from '@assets/img/new_logo.svg';
import styled from 'styled-components';
import palette from '@styles/palette';

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
  width: 135px;
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
  /* padding: 0 5px 0 5px; */
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 15px;
`;
interface vNavBarProps {
  role: string;
  handleClick: any;
}

const VNavBar = ({ handleClick, role }: vNavBarProps): JSX.Element => {
  // const role = 'ADMIN';
  return (
    <NavBarBlock>
      <Logo src={logo} alt="logo" />
      <Menu>
        <Role>{role}</Role>
        <LogoutBtn onClick={handleClick}>LOGOUT</LogoutBtn>
      </Menu>
    </NavBarBlock>
  );
};

export default VNavBar;
