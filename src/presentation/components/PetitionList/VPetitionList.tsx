import { Loading, StLine } from '@components/common';
import checkPetitionStatus from '@utils/petitionStatus';
import { getDay } from '@utils/timeFormat';
import styled from 'styled-components';

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

const HeaderItem = styled(PetitionItem)`
  height: 2em;
`;

const PetitionDescription = styled.div`
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

const PetitionStatus = styled.div`
  margin: auto;
  font-size: 0.8em;
  color: white;
  border-radius: 4px;
  background-color: gray;
  text-align: center;
  width: 70px;
`;

const statusColor = {
  '승인 대기중': '#DD433B',
  '청원 진행중': '#616463',
  '답변 대기중': '#DF3127',
  '답변 완료': '#008DD5',
  '승인 반려': '#000000',
  '청원 만료': '#000000',
};

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
          return (
            <div key={'petition_item_' + id}>
              <PetitionItem>
                <PetitionStatus style={{ backgroundColor: statusColor[status] }}>{status}</PetitionStatus>
                <PetitionDescription>{id}</PetitionDescription>
                <PetitionDescription>{categoryName}</PetitionDescription>
                <PetitionTitle
                  href={`${location.pathname}/${type === 'release' || type === 'rejected' ? tempUrl : id}`}
                >
                  {title}
                </PetitionTitle>
                <PetitionDescription>{getDay(createdAt)}</PetitionDescription>
              </PetitionItem>
              <StLine />
            </div>
          );
        })}
      </StUl>
    </MinHeight>
  );
};

export default VPetitionList;
