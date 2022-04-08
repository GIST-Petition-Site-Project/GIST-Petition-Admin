import { getWaitingReleaseCount, getWaitingAnswerCount } from '@api/petitionQueryAPI';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { PayloadAction } from '@reduxjs/toolkit';
import { setAnswer, setApprove, setManage, setUser } from '@stores/menuSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  /* position: fixed; */
  width: 180px;
  left: 2em;
  color: ${(props) => props.theme.colors.text};
  border-right: solid 1px ${(props) => props.theme.colors.line};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SidebarButton = styled.button`
  border: 0;
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  text-align: left;
  padding: 2em;
  :hover {
    background: ${(props) => props.theme.colors.focus};
  }
`;

const Count = styled.div`
  color: white;
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: red;
  text-align: center;
`;

const MobileWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  div {
    position: fixed;
    z-index: 1;
  }
`;

const Sidebar = (): JSX.Element => {
  const [waitingReleaseCount, setWaitingReleaseCount] = useState(0);
  const [waitingAnswerCount, setWaitingAnswerCount] = useState(0);
  // const type = useAppSelect((select) => select.menu.type);

  const getCounts = async () => {
    const response1 = await getWaitingReleaseCount();
    const response2 = await getWaitingAnswerCount();
    setWaitingReleaseCount(response1.data);
    setWaitingAnswerCount(response2.data);
  };
  useEffect(() => {
    getCounts();
    const interval = setInterval(() => getCounts(), 60000);
    return () => clearInterval(interval);
    // return;
  }, []);

  const role = useAppSelect((select) => select.auth.role);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (action: PayloadAction) => {
    dispatch(action);
    navigate({ pathname: '/' });
  };

  return (
    <>
      <SidebarWrapper>
        {role === 'ADMIN' && <SidebarButton onClick={() => handleClick(setUser())}>유저 관리</SidebarButton>}
        <SidebarButton onClick={() => handleClick(setManage())}>청원 관리</SidebarButton>
        <SidebarButton onClick={() => handleClick(setApprove())}>
          청원 승인 <Count>{waitingReleaseCount}</Count>
        </SidebarButton>
        <SidebarButton onClick={() => handleClick(setAnswer())}>
          답변 등록 <Count>{waitingAnswerCount}</Count>
        </SidebarButton>
      </SidebarWrapper>
      <MobileWrapper></MobileWrapper>
    </>
  );
};

export default Sidebar;
