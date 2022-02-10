import styled from 'styled-components';

interface vPetitionListProps {
  petitions: Array<Petition>;
}

const PetitionItem = styled.div`
  display: flex;
`;
const VPetitionList = ({ petitions }: vPetitionListProps): JSX.Element => {
  return (
    <ul>
      {petitions.map((petition) => {
        const { id, categoryName, title, agreements, createdAt } = petition;
        return (
          <PetitionItem key={id}>
            <div>{categoryName}</div>
            <a href={`/answer/${id}`}>{title}</a>
            <div>{agreements}</div>
            <div>{createdAt}</div>
          </PetitionItem>
        );
      })}
    </ul>
  );
};

export default VPetitionList;
