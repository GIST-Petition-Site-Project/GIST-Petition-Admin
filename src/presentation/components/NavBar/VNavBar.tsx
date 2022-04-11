import logo_dark from '@assets/img/logo_dark.svg';
import logo_light from '@assets/img/logo_light.svg';
import styled from 'styled-components';
import ToggleSwitch from '@components/NavBar/ToggleSwitch';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { toggleMode } from '@stores/modeSlice';

const NavBarBlock = styled.div`
  color: ${(props) => props.theme.colors.text};
  height: 50px;
  margin: 0 auto;
  position: sticky;
  top: 0px;
  border-bottom: ${(props) => props.theme.colors.line} 1px solid;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const NavWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1350px;
  width: 100%;
  padding: 0 2em;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Menu = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 2em;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const LogoutBtn = styled.button`
  cursor: pointer;
  font-family: Pretendard;
  padding: 6px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  border: 0px;
  border-radius: 40px;
  font-size: 15px;
  transition: 0.2s;
  :hover {
    background-color: ${(props) => props.theme.colors.gistRed};
    color: white;
  }
`;
interface vNavBarProps {
  handleClick: any;
}

const VNavBar = ({ handleClick }: vNavBarProps): JSX.Element => {
  const isChecked = useAppSelect((select) => select.mode.isLightMode);
  const isAuthorized = useAppSelect((select) => select.auth.isAuthorized);
  const dispatch = useAppDispatch();
  const vToggleSwitchProps = {
    isChecked,
    handleChange: () => {
      dispatch(toggleMode());
    },
  };
  const isLightMode = useAppSelect((select) => select.mode.isLightMode);
  return (
    <NavBarBlock>
      <NavWrapper>
        <a href="/">
          <Logo src={isLightMode ? logo_light : logo_dark} alt="logo" />
        </a>
        <Menu>
          <ToggleSwitch {...vToggleSwitchProps} />
          {isAuthorized ? <LogoutBtn onClick={handleClick}>LOGOUT</LogoutBtn> : null}
        </Menu>
      </NavWrapper>
    </NavBarBlock>
  );
};

export default VNavBar;
