import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import palette from './palette';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: ${palette.gray[1]};
`;
