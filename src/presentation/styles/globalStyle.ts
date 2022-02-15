import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import PALETTE from './palette';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background-color: ${PALETTE.BACKGROUND};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
`;
