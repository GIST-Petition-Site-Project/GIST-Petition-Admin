import logo from '@assets/img/new_logo.svg';
import styled from 'styled-components';
import palette from '@styles/palette';

const NavBarBlock = styled.div`
  background-color: #252525;
  color: white;
  /* display: flex; */
  height: 5vh;
  position: relative;
  border-bottom: #444 1px solid;
`;

const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  /* margin: 5px; */
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Role = styled.p`
  margin-right: 5px;
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
        <Role style={{ margin: '5px' }}>{role}</Role>
        <button onClick={handleClick}>Logout</button>
      </Menu>
    </NavBarBlock>
  );
};

export default VNavBar;
