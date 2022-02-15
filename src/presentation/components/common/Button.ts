import styled, { css } from 'styled-components';
import PALETTE from '@styles/palette';
interface IButtonProps {
  full?: boolean;
  primary?: boolean;
}
const SButton = styled.button<IButtonProps>`
  border: none;
  border-radius: 0px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${PALETTE.GRAY[0]};
  &:hover {
    background: ${PALETTE.GRAY[0]};
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
      backgorund: ${PALETTE.PRIMARY_RED};
      &:hover {
        background: ${PALETTE.PRIMARY_RED};
      }
    `}
`;

export default SButton;
