import { getDayTime } from '@utils/getTime';
import styled from 'styled-components';

interface vPetitionListProps {
  petitions: Array<Petition>;
}

const StUl = styled.ul`
  line-height: 50px;
`;

const PetitionItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  &:hover {
    background-color: #222;
  }
`;
const PetitionDescription = styled.div`
  /* line-height: 1em; */
`;
const PetitionTitle = styled.a`
  line-height: 1.5em;
  text-decoration: none;
  :link {
    color: white;
  }
  :visited {
    color: white;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const StLine = styled.hr`
  margin: 0;
  color: white;
  border-color: white;
  background-color: white;
  opacity: 0.1;
`;

const VPetitionList = ({ petitions }: vPetitionListProps): JSX.Element => {
  return (
    <StUl>
      <StLine />
      {petitions.map((petition) => {
        ('');
        const { id, categoryName, title, createdAt } = petition;
        return (
          <div key={'petition_item_' + id}>
            <PetitionItem>
              <PetitionDescription>{categoryName}</PetitionDescription>
              <PetitionTitle href={`${location.pathname}/${id}`}>{title}</PetitionTitle>
              <PetitionDescription>{getDayTime(createdAt)}</PetitionDescription>
            </PetitionItem>
            <StLine />
          </div>
        );
      })}
    </StUl>
  );
};

export default VPetitionList;
