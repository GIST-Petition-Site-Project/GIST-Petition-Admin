import { getWaitingAnswerCount, getWaitingReleaseCount } from '@api/petitionAPI';
import { StButton } from '@components/common';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContentsGrid = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5% 0 5%;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  background-color: ${(props) => props.theme.colors.background};
`;

const DashboardText = styled.div`
  font-size: 5vw;
  font-weight: 900;
`;

const Buttons = styled.div`
  height: 100%;
  display: flexbox;
  justify-content: center;
  align-items: center;
  column-gap: 2em;
  row-gap: 2em;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

const HomeButton = styled(StButton)`
  position: relative;
  margin: 1.5vw 2vw;
  font-size: 1.5vw;
  font-weight: 400;
  cursor: pointer;
  :hover #noti {
    display: none;
  }
`;

const Noti = styled.div`
  position: absolute;
  text-align: center;
  top: -5px;
  right: -5px;
  height: 16px;
  width: 16px;
  font-size: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gistRed};
  color: white;
  transition: 0.2s;
`;

const Home = (): JSX.Element => {
  const [release, setRelease] = useState(0);
  const [answer, setAnswer] = useState(0);

  const getCounts = async () => {
    const response1 = await getWaitingReleaseCount();
    const response2 = await getWaitingAnswerCount();
    setRelease(response1.data);
    setAnswer(response2.data);
  };
  useEffect(() => {
    getCounts();
  }, []);
  const role = useAppSelect((select) => select.auth.role);
  const navigate = useNavigate();

  return (
    <>
      <ContentsGrid>
        <Dashboard>
          <DashboardText>{`현재 승인을 기다리는 ${release}개의 청원과, `}</DashboardText>
          <DashboardText>{`답변을 기다리는 ${answer}개의 청원이 있습니다.`}</DashboardText>
        </Dashboard>
        <Buttons>
          {role === 'ADMIN' ? <HomeButton onClick={() => navigate('/role')}>역할 변경</HomeButton> : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <HomeButton onClick={() => navigate('/modify')}>청원 수정</HomeButton>
          ) : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <HomeButton onClick={() => navigate('/approve')}>
              {release ? <Noti id="noti">{release}</Noti> : null}
              청원 승인
            </HomeButton>
          ) : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <HomeButton onClick={() => navigate('/answer')}>
              {answer ? <Noti id="noti">{answer}</Noti> : null}
              답변 등록
            </HomeButton>
          ) : null}
          {role === 'ADMIN' ? <HomeButton onClick={() => navigate('/revision')}>청원 수정 이력</HomeButton> : null}
        </Buttons>
      </ContentsGrid>
    </>
  );
};

export default Home;
