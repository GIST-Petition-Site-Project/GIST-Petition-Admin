import { Title } from '@components/common';
import PetitionList from '@components/PetitionList';
import Sidebar from '@components/Sidebar';
import UserList from '@components/User';
import { useAppSelect } from '@hooks/useStore';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  max-width: 1350px;
  min-height: calc(100vh - 50px);
  height: 100%;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  padding: 0 2em;
  @media screen and (max-width: 768px) {
    padding: 40px 2em 0 2em;
  }
`;

const locale: { [key in Menu]: string } = {
  user: '유저 관리',
  manage: '청원 관리',
  approve: '청원 승인',
  answer: '답변 등록',
};

const Home = (): JSX.Element => {
  const type = useAppSelect((select) => select.menu.type);
  return (
    <div style={{ maxWidth: '1350px', width: '100%', margin: '0 auto', justifyContent: 'center' }}>
      <Flex>
        <Sidebar />
        {type === 'user' ? (
          <ContentItem>
            <Title>유저 관리</Title>
            <UserList />
          </ContentItem>
        ) : (
          <ContentItem>
            <Title>{locale[type]}</Title>
            <PetitionList />
          </ContentItem>
        )}
      </Flex>
    </div>
  );
};

export default Home;
