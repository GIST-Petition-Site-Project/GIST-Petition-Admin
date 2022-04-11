import styled from 'styled-components';
import { Title, StButton, BottomPadder, Writer } from '@components/common';

const VideoFlex = styled.div`
  display: flex;
  margin-top: 2em;
  height: 2.5em;
`;

const VideoTitle = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  line-height: 2.5em;
  font-size: 1em;
  margin: auto;
  height: 100%;
  width: 100px;
  color: ${(props) => props.theme.colors.text};
`;

const VideoInput = styled(Writer)`
  padding: 0.5em;
  height: 2.5em;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface vWriteAnswerProps {
  answer: string;
  videoUrl: string;
  petition: Petition | undefined;
  handleChange: any;
  handleSubmit: any;
}

const VWriteAnswer = ({ answer, petition, videoUrl, handleChange, handleSubmit }: vWriteAnswerProps): JSX.Element => {
  return (
    <form onSubmit={handleSubmit}>
      <TitleWrapper>
        <Title>{petition?.answered ? '답변 수정' : '답변 작성'}</Title>
        <StButton type="submit">{petition?.answered ? '답변 수정' : '답변 등록'}</StButton>
      </TitleWrapper>
      <Writer className="answer" value={answer} onChange={handleChange}></Writer>
      <VideoFlex>
        <VideoTitle>유튜브 링크</VideoTitle>
        <VideoInput className="videoUrl" value={videoUrl} onChange={handleChange}></VideoInput>
      </VideoFlex>
      <BottomPadder />
    </form>
  );
};

export default VWriteAnswer;
