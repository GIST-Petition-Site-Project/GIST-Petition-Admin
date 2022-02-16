import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

interface IProps {
  isLightMode: boolean;
}

export const GlobalStyle = createGlobalStyle<IProps>`
  ${reset};
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => (props.isLightMode ? '#fff' : '#252525')};
    transition: background-color 0.2s linear;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
`;
