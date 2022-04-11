import styled from 'styled-components';

const TitleEditer = styled.textarea`
  background-color: ${(props) => props.theme.colors.background};
  font-family: Pretendard;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 10vh;
  padding: 1em;
  margin-bottom: 1em;
  outline-color: #444;
  :focus {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const DescriptionEditer = styled.textarea`
  background-color: ${(props) => props.theme.colors.background};
  font-family: Pretendard;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 60vh;
  padding: 1em;
  outline-color: #444;
  line-height: 1.5em;
  :focus {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface vModifyPeitionProps {
  title: string;
  description: string;
  handleChange: any;
}

const VModifyPetition = ({ title, description, handleChange }: vModifyPeitionProps): JSX.Element => {
  return (
    <FormWrapper>
      <TitleEditer name="title" value={title} onChange={handleChange}></TitleEditer>
      <DescriptionEditer name="description" value={description} onChange={handleChange}></DescriptionEditer>
    </FormWrapper>
  );
};

export default VModifyPetition;
