import styled, { css } from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 24px;
  margin-top: 36px;
  margin-bottom: 36px;
  /* transition: 0.2s; */
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  margin-left: 5%;
  margin-right: 5%;
  /* transition: 0.2s linear; */
`;

export const StLine = styled.hr`
  color: ${(props) => props.theme.colors.text};
  border-color: ${(props) => props.theme.colors.line};
  /* background-color: white; */
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
  height: 50px;
`;
