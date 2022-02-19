import { getWaitingAnswerCount, getWaitingReleaseCount } from '@api/petitionAPI';
import { StButton } from '@components/common';
import ToggleSwitch from '@components/NavBar/ToggleSwitch';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { useToast } from '@hooks/useToast';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContentsGrid = styled.div`
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
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
  font-size: 4vw;
  font-weight: 900;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 50px;
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
  });
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
          {role === 'ADMIN' ? <StButton onClick={() => navigate('/role')}>역할 변경</StButton> : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <StButton onClick={() => navigate('/modify')}>청원 수정</StButton>
          ) : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <StButton onClick={() => navigate('/approve')}>청원 승인</StButton>
          ) : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <StButton onClick={() => navigate('/answer')}>답변 등록</StButton>
          ) : null}
          {role === 'MANAGER' || role === 'ADMIN' ? (
            <StButton onClick={() => navigate('/revision')}>청원 수정 이력</StButton>
          ) : null}
        </Buttons>
      </ContentsGrid>
    </>
  );
};

export default Home;
