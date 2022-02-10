import NavBar from '@components/Navigation';
import { useAppSelect } from '@hooks/store.hooks';
import palette from '@styles/palette';
import styled from 'styled-components';

const ContentsGrid = styled.div`
  height: 92vh;
  background-color: ${palette.gray[1]};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Home = (): JSX.Element => {
  const role = useAppSelect((select) => select.auth.role);
  return (
    <>
      <ContentsGrid>
        {role === 'ADMIN' ? <a href="/role">유저 역할 변경</a> : null}
        {role === 'ADMIN' ? <div>청원 변경 이력 보기</div> : null}
        {role === 'MANAGER' ? <a href="/answer">답변 달기</a> : null}
        <div>대시보드</div>
      </ContentsGrid>
    </>
  );
};

export default Home;
