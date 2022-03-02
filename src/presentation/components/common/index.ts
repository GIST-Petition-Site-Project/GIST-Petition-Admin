import styled, { css } from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 24px;
  margin-top: 36px;
  margin-bottom: 36px;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`;

export const StLine = styled.hr`
  margin: 0;
  border-color: ${(props) => props.theme.colors.line};
  opacity: 0.1;
`;

interface ButtonProps {
  green?: boolean;
}

export const StButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.colors.text};
  font-family: Pretendard;
  font-size: 14px;
  padding: 12px 24px;
  margin: auto 0 auto 0;
  color: ${(props) => props.theme.colors.text};
  white-space: nowrap;
  transition: 0.2s linear;
  :hover {
    background-color: ${(props) => props.theme.colors.gistRed};
    border: 1px solid ${(props) => props.theme.colors.gistRed};
    color: white;
  }
  ${(props) =>
    props?.green &&
    css`
      :hover {
        background-color: ${(props) => props.theme.colors.gistGreen};
        border: 1px solid ${(props) => props.theme.colors.gistGreen};
      }
    `}
  a {
    text-decoration: none;
  }
`;

export const StSelect = styled.select`
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  height: 30px;
  padding: 0.5em;
  margin-right: 1px;
  border-radius: 5px;
  text-align: center;
`;

export const BottomPadder = styled.div`
  height: 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5em;
  transform: translate(-50%, -50%);
  font-size: 1em;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

export const Content = styled.div`
  white-space: pre-line;
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 1.5em;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5em;
`;

export const Description = styled.div`
  white-space: pre-line;
  width: 100%;
  text-align: end;
  color: ${(props) => props.theme.colors.text};
  font-weight: 200;
  font-size: 12px;
  line-height: 1.5em;
`;
