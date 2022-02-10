import logo from '@assets/img/new_logo.svg';
import styled from 'styled-components';
interface vNavBarProps {
  role: string;
  handleClick: any;
}

const NavBarBlock = styled.div`
  background-color: black;
  color: white;
  /* display: flex; */
  height: 50px;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  /* margin: 5px; */
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Role = styled.p`
  margin-right: 5px;
`;

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
