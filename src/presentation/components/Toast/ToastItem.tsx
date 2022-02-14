import palette from '@styles/palette';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ILine {
  duration: number;
  type: 'success' | 'warning';
}

interface IWrapper {
  isClosing: boolean;
}

const Wrapper = styled.div<IWrapper>`
  color: ${(props) => (props.color === 'warning' ? palette.primary : 'white')};
  background-color: black;
  padding-bottom: 4px;
  position: relative;
  animation: 0.3s forwards ${(props) => (props.isClosing ? 'fadeout' : 'slideFromBottom')};
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes slideFromBottom {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Message = styled.div`
  margin: 10px;
`;

const Line = styled.div<ILine>`
  background-color: ${(props) => (props.type === 'warning' ? palette.primary : 'white')};
  animation: ${(props) => props.duration}s linear timer;
  position: absolute;
  bottom: 0;
  width: 0%;
  height: 2px;
  border-radius: 1px;
  @keyframes timer {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  } ;
`;

const ToastItem = ({ message, type, duration }: Toast) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const setExitTimeout = setTimeout(() => {
      setIsClosing(true);
      clearTimeout(setExitTimeout);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    }, duration!);
    return () => clearTimeout(setExitTimeout);
  }, []);

  return (
    <Wrapper isClosing={isClosing}>
      <Message color={type}>
        <div>{message}</div>
      </Message>
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <Line type={type} duration={duration! / 1000} />
    </Wrapper>
  );
};

export default ToastItem;
