import styled, { css } from 'styled-components';
import palette from '@styles/palette';
interface ButtonProps {
  full?: boolean;
  primary?: boolean;
}
const SButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 0px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[0]};
  &:hover {
    background: ${palette.gray[0]};
  }
  ${(props) =>
    props?.full &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props?.primary &&
    css`
      backgorund: ${palette.primary};
      &:hover {
        background: ${palette.primary};
      }
    `}
`;

export default SButton;
