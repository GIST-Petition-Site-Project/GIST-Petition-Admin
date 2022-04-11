import { getWaitingReleaseCount, getWaitingAnswerCount } from '@api/petitionQueryAPI';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { PayloadAction } from '@reduxjs/toolkit';
import { setAnswer, setApprove, setManage, setUser } from '@stores/menuSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: static;
    width: 180px;
    color: ${(props) => props.theme.colors.text};
    border-right: solid 1px ${(props) => props.theme.colors.line};
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    overflow: hidden;
    top: 50px;
    width: 100vw;
    height: 40px;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    color: ${(props) => props.theme.colors.text};
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px ${(props) => props.theme.colors.line};
  }
`;

const SidebarButton = styled.button`
  @media screen and (max-width: 768px) {
    height: 40px;
  }
  border: 0;
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  padding: auto;
  position: relative;
  height: 4em;
  :hover {
    background: ${(props) => props.theme.colors.focus};
  }
`;

const Count = styled.div`
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
  color: white;
  display: inline-block;
  height: 1rem;
  width: 1rem;
  line-height: 1rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gistRed};
  font-size: 0.8em;
  text-align: center;
  position: absolute;
  margin-left: 4px;
`;

const Sidebar = (): JSX.Element => {
  const [waitingReleaseCount, setWaitingReleaseCount] = useState(0);
  const [waitingAnswerCount, setWaitingAnswerCount] = useState(0);
  const type = useAppSelect((select) => select.menu.type);

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
        {role === 'ADMIN' && (
          <SidebarButton
            style={type === 'user' ? { textDecoration: 'underline' } : {}}
            onClick={() => handleClick(setUser())}
          >
            유저 관리
          </SidebarButton>
        )}
        <SidebarButton
          style={type === 'manage' ? { textDecoration: 'underline' } : {}}
          onClick={() => handleClick(setManage())}
        >
          청원 관리
        </SidebarButton>
        <SidebarButton
          style={type === 'approve' ? { textDecoration: 'underline' } : {}}
          onClick={() => handleClick(setApprove())}
        >
          청원 승인 <Count>{waitingReleaseCount}</Count>
        </SidebarButton>
        <SidebarButton
          style={type === 'answer' ? { textDecoration: 'underline' } : {}}
          onClick={() => handleClick(setAnswer())}
        >
          답변 등록 <Count>{waitingAnswerCount}</Count>
        </SidebarButton>
      </SidebarWrapper>
      {/* <MobileWrapper>
        {role === 'ADMIN' && (
          <SidebarButton onClick={() => handleClick(setUser())}>
            <MdManageAccounts />
          </SidebarButton>
        )}
        <SidebarButton onClick={() => handleClick(setManage())}>
          <MdViewList />
        </SidebarButton>
        <SidebarButton onClick={() => handleClick(setApprove())}>
          <MdPlaylistAddCheck />
          <Count>{waitingReleaseCount}</Count>
        </SidebarButton>
        <SidebarButton onClick={() => handleClick(setAnswer())}>
          <MdOutlineBorderColor />
          <Count>{waitingAnswerCount}</Count>
        </SidebarButton>
      </MobileWrapper> */}
    </>
  );
};

export default Sidebar;
