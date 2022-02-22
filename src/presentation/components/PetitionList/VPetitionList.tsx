import { BottomPadder, StLine } from '@components/common';
import { getDay } from '@utils/getTime';
import styled from 'styled-components';

interface vPetitionListProps {
  isLoading: boolean;
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

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5em;
  transform: translate(-50%, -50%);
  font-size: 1em;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

const VPetitionList = ({ isLoading, petitions, type }: vPetitionListProps): JSX.Element => {
  return (
    <>
      {isLoading ? <Loading>로딩중...</Loading> : null}
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
