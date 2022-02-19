import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    /* transition: background-color 0.2s linear; */
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
`;
