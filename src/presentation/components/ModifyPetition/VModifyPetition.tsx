import styled from 'styled-components';
interface vModifyPeitionProps {
  // petition: Petition | undefined;
  title: string;
  description: string;
  handleChange: any;
  handleSubmit: any;
}

const TitleEditer = styled.textarea`
  width: 50vw;
  height: 8vh;
`;
const DescriptionEditer = styled.textarea`
  width: 50vw;
  height: 50vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VModifyPetition = ({ title, description, handleChange, handleSubmit }: vModifyPeitionProps): JSX.Element => {
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <TitleEditer name="title" value={title} onChange={handleChange}></TitleEditer>
        <DescriptionEditer name="description" value={description} onChange={handleChange}></DescriptionEditer>
        <button type="submit">청원 수정</button>
      </Wrapper>
    </form>
  );
};

export default VModifyPetition;
