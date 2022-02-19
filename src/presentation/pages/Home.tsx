import ToggleSwitch from '@components/NavBar/ToggleSwitch';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { useToast } from '@hooks/useToast';
import styled from 'styled-components';

const ContentsGrid = styled.div`
  height: 95vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

const StLink = styled.a`
  height: 100%;
  width: 100%;
  padding: 100;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  /* transition: 0.2s; */
  :link {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
  :visited {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const Home = (): JSX.Element => {
  const role = useAppSelect((select) => select.auth.role);

  /* for testing toast */
  const toast = useToast();
  const fireSuccess = () => {
    toast({ message: 'success', type: 'success' });
  };
  const fireWarning = () => {
    toast({ message: 'warning', type: 'warning' });
  };

  return (
    <>
      <ContentsGrid>
        {role === 'ADMIN' ? <StLink href="/role">유저 역할 변경</StLink> : null}
        {/* {role === 'ADMIN' ? <div>청원 변경 이력 보기</div> : null} */}
        {role === 'MANAGER' ? <StLink href="/approve">청원 승인</StLink> : null}
        {role === 'MANAGER' ? <StLink href="/answer">답변 등록</StLink> : null}
        {role === 'MANAGER' ? <StLink href="/modify">청원 수정</StLink> : null}
        <button onClick={fireSuccess}> 성공 토스트 </button>
        <button onClick={fireWarning}> 실패 토스트 </button>
      </ContentsGrid>
    </>
  );
};

export default Home;
