import { Loading, StLine } from '@components/common';
import checkPetitionStatus from '@utils/petitionStatus';
import styled from 'styled-components';
import VPetitionItem from './VPetitionItem';

const StUl = styled.ul`
  line-height: 1em;
`;

const PetitionDescription = styled.div`
  text-align: center;
`;

const HeaderItem = styled.div`
  height: 2em;
  display: none;
  grid-template-columns: 80px 80px 80px 1fr 80px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
  @media screen and (min-width: 768px) {
    display: grid;
  }
`;

interface vPetitionListProps {
  isLoading: boolean;
  petitions: Array<Petition>;
  type: Menu;
}

const VPetitionList = ({ isLoading, petitions, type }: vPetitionListProps): JSX.Element => {
  return (
    <>
      {isLoading ? <Loading>로딩중...</Loading> : null}
      <StUl>
        <HeaderItem>
          <PetitionDescription>상태</PetitionDescription>
          <PetitionDescription>ID</PetitionDescription>
          <PetitionDescription>분류</PetitionDescription>
          <PetitionDescription>제목</PetitionDescription>
          <PetitionDescription>작성 일자</PetitionDescription>
        </HeaderItem>
        <StLine />
        {petitions.map((petition) => {
          const { id, categoryName, title, createdAt, tempUrl } = petition;
          const status = checkPetitionStatus(petition);
          const vPetitionItemProps = {
            type,
            id,
            categoryName,
            title,
            createdAt,
            tempUrl,
            status,
          };
          return (
            <div key={'petition_item_' + id}>
              <VPetitionItem {...vPetitionItemProps}></VPetitionItem>
            </div>
          );
        })}
      </StUl>
    </>
  );
};

export default VPetitionList;
