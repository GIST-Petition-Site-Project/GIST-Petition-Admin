import styled from 'styled-components';

const SwitchContainer = styled.div`
  position: relative;
`;

const SwitchLabel = styled.label`
  position: absolute;
  top: 4px;
  left: 0;
  width: 30px;
  height: 20px;
  border-radius: 50px;
  background-color: rgb(249, 319, 129);
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 2px;
    background: ${(props) => props.theme.colors.background};
    transition: 0.2s;
  }
`;

const SwitchCheckbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50px;
  width: 30px;
  height: 20px;
  border-radius: 50px;
  &:checked + ${SwitchLabel} {
    background: rgb(153, 182, 214);
    &::after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin: 2px;
      margin-left: 12px;
      background: ${(props) => props.theme.colors.background};
      transition: 0.2s;
    }
  }
`;
interface vToggleSwitchProps {
  isChecked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
const ToggleSwitch = ({ isChecked, handleChange }: vToggleSwitchProps) => {
  return (
    <SwitchContainer>
      <SwitchCheckbox type="checkbox" checked={isChecked} onChange={handleChange} id="checkbox" />
      <SwitchLabel htmlFor="checkbox" />
    </SwitchContainer>
  );
};

export default ToggleSwitch;
