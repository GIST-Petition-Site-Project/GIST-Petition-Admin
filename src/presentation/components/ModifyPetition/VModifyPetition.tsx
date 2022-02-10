import styled from 'styled-components';
interface vModifyPeitionProps {
  petition: Petition | undefined;
  title: string;
  description: string;
  handleChange: any;
  handleSubmit: any;
}

const TitleEditer = styled.textarea`
  width: 90vw;
  height: 8vh;
`;
const DescriptionEditer = styled.textarea`
  width: 90vw;
  height: 50vh;
`;

const VModifyPetition = ({
  petition,
  title,
  description,
  handleChange,
  handleSubmit,
}: vModifyPeitionProps): JSX.Element => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TitleEditer name="title" value={title} onChange={handleChange}></TitleEditer>
        <DescriptionEditer name="description" value={description} onChange={handleChange}></DescriptionEditer>
        <button type="submit">청원 수정</button>
      </form>
    </>
  );
};

export default VModifyPetition;
