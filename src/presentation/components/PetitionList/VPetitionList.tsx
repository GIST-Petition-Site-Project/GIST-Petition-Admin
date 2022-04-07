import { Loading, StLine } from '@components/common';
import checkPetitionStatus from '@utils/petitionStatus';
import styled from 'styled-components';
import VPetitionItem from './VPetitionItem';

interface vPetitionListProps {
  isLoading: boolean;
  petitions: Array<Petition>;
  type: any;
}

const MinHeight = styled.div`
  min-height: 65vh;
`;

const StUl = styled.ul`
  line-height: 1em;
`;

const PetitionItem = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 1fr 80px;
  justify-content: center;
  align-items: center;
  height: 64px;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: ${(props) => props.theme.colors.focus};
  }
`;

const PetitionDescription = styled.div`
  text-align: center;
`;

const HeaderItem = styled(PetitionItem)`
  height: 2em;
  display: none;
  @media screen and (min-width: 600px) {
    display: grid;
  }
`;

const VPetitionList = ({ isLoading, petitions, type }: vPetitionListProps): JSX.Element => {
  return (
    <MinHeight>
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
          const { released, agreeCount, answered, rejected, id, categoryName, title, createdAt, tempUrl, expired } =
            petition;
          const status = checkPetitionStatus(released, agreeCount, answered, rejected, expired);
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
    </MinHeight>
  );
};

export default VPetitionList;
