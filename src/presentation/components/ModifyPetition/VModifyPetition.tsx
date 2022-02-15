import { StButton, Title, Wrapper } from '@components/common';
import PALETTE from '@styles/palette';
import styled from 'styled-components';
interface vModifyPeitionProps {
  // petition: Petition | undefined;
  title: string;
  description: string;
  handleChange: any;
}

const TitleEditer = styled.textarea`
  background-color: ${PALETTE.BACKGROUND};
  font-family: Pretendard;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 10vh;
  padding: 1em;
  margin-bottom: 1em;
  outline-color: #444;
  :focus {
    background-color: #222;
  }
`;

const DescriptionEditer = styled.textarea`
  background-color: ${PALETTE.BACKGROUND};
  font-family: Pretendard;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 60vh;
  padding: 1em;
  outline-color: #444;
  line-height: 1.5em;
  :focus {
    background-color: #222;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VModifyPetition = ({ title, description, handleChange }: vModifyPeitionProps): JSX.Element => {
  return (
    <>
      <FormWrapper>
        <TitleEditer name="title" value={title} onChange={handleChange}></TitleEditer>
        <DescriptionEditer name="description" value={description} onChange={handleChange}></DescriptionEditer>
      </FormWrapper>
    </>
  );
};

export default VModifyPetition;
