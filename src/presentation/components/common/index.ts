import styled from 'styled-components';
import PALETTE from '@styles/palette';

export const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 24px;
  margin-top: 36px;
  margin-bottom: 36px;
  /* ::first-letter {
    color: ${PALETTE.PRIMARY_RED};
  } */
`;

export const Wrapper = styled.div`
  background: ${PALETTE.BACKGROUND};
  margin-left: 5%;
  margin-right: 5%;
`;

export const StLine = styled.hr`
  color: white;
  border-color: white;
  background-color: white;
  opacity: 0.1;
`;

export const StButton = styled.button`
  background-color: ${PALETTE.BACKGROUND};
  border-radius: 40px;
  border: 1px solid white;
  font-family: Pretendard;
  font-size: 14px;
  padding: 12px 24px;
  margin: auto 0;
  color: white;
  transition: background-color 0.4s, border 0.4s;
  --webkit-transition: background-color 0.4s, border 0.4s;
  :hover {
    background-color: ${PALETTE.PRIMARY_RED};
    border: 1px solid ${PALETTE.PRIMARY_RED};
  }
`;

export const BottomPadder = styled.div`
  height: 50px;
`;
