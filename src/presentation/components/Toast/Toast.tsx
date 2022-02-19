import styled from 'styled-components';
import { useToasts } from '@hooks/useToast';
import ToastItem from './ToastItem';

const Wrapper = styled.div`
  position: absolute;
  bottom: 50px;
  /* left: 50%; */
  right: 0px;
  /* transform: translate(0, -50%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index: 10001; */
  gap: 10px;
`;

const Toast = (): JSX.Element => {
  const toasts = useToasts();
  return (
    <Wrapper>
      {toasts.map((toast: Toast) => (
        <ToastItem key={toast.id} message={toast.message} type={toast.type} duration={toast.duration} />
      ))}
    </Wrapper>
  );
};

export default Toast;
