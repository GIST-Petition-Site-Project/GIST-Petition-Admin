import styled from 'styled-components';

interface vWriteAnswerProps {
  petition: Petition | undefined;
  answer: string;
  handleChange: any;
  handleSubmit: any;
}

const Writer = styled.textarea`
  width: 45vw;
  height: 70vh;
`;

const VWriteAnswer = ({ petition, answer, handleChange, handleSubmit }: vWriteAnswerProps): JSX.Element => {
  return (
    <form onSubmit={handleSubmit || handleSubmit}>
      <div>Title {petition?.title}</div>
      <div>Description {petition?.description}</div>
      <Writer value={answer} onChange={handleChange}></Writer>
      <button type="submit">답변 등록</button>
    </form>
  );
};

export default VWriteAnswer;
