import styled from 'styled-components';

interface vWriteAnswerProps {
  petition: Petition | undefined;
}

const Writer = styled.textarea`
  width: 45vw;
  height: 70vh;
`;

const VWriteAnswer = ({ petition }: vWriteAnswerProps): JSX.Element => {
  console.log(petition);
  return (
    <>
      <div>{petition?.title}</div>
      <Writer value={petition?.description}></Writer>
    </>
  );
};

export default VWriteAnswer;
