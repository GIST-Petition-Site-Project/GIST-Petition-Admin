import NavBar from '@components/Navigation/NavBar';
import palette from '@styles/palette';
import styled from 'styled-components';

const HomeTemplateBlock = styled.div`
  height: 100vh;
  background-color: ${palette.gray[1]};
`;
const Home = (): JSX.Element => {
  return (
    <>
      <NavBar></NavBar>
      <HomeTemplateBlock></HomeTemplateBlock>
    </>
  );
};

export default Home;
