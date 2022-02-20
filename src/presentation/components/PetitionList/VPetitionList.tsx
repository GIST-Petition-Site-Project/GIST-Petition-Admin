import { BottomPadder, StLine } from '@components/common';
import { getDay } from '@utils/getTime';
import styled from 'styled-components';

interface vPetitionListProps {
  petitions: Array<Petition>;
  type: any;
}

const StUl = styled.ul`
  line-height: 1em;
`;

const PetitionItem = styled.div`
  display: grid;
  /* line-height: 50px; */
  grid-template-columns: 80px 1fr 64px;
  justify-content: center;
  align-items: center;
  height: 64px;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const HeaderItem = styled(PetitionItem)`
  height: 2em;
`;

const PetitionDescription = styled.div`
  /* line-height: 1em; */
  text-align: center;
`;

const PetitionTitle = styled.a`
  padding-left: 1em;
  line-height: 1.5em;
  padding: 0.5em;
  text-decoration: none;
  text-align: left;
  :link {
    color: ${(props) => props.theme.colors.text};
  }
  :visited {
    color: ${(props) => props.theme.colors.text};
  }
  &:hover {
    text-decoration: underline;
  }
`;

const VPetitionList = ({ petitions, type }: vPetitionListProps): JSX.Element => {
  return (
    <>
      <StUl>
        <HeaderItem>
          <PetitionDescription>분류</PetitionDescription>
          <PetitionDescription>제목</PetitionDescription>
          <PetitionDescription>작성 일자</PetitionDescription>
        </HeaderItem>
        <StLine />
        {petitions.map((petition) => {
          ('');
          const { id, categoryName, title, createdAt, tempUrl } = petition;
          return (
            <div key={'petition_item_' + id}>
              <PetitionItem>
                <PetitionDescription>{categoryName}</PetitionDescription>
                <PetitionTitle href={`${location.pathname}/${type === 'release' ? tempUrl : id}`}>
                  {title}
                </PetitionTitle>
                <PetitionDescription>{getDay(createdAt)}</PetitionDescription>
              </PetitionItem>
              <StLine />
            </div>
          );
        })}
      </StUl>
      <BottomPadder />
    </>
  );
};

export default VPetitionList;
