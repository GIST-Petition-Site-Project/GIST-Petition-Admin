import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import PALETTE from './palette';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: ${PALETTE.BACKGROUND};
`;
