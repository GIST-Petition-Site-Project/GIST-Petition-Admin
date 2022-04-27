import styled from 'styled-components';
import { getDay } from '@utils/timeFormat';
import { StLine } from '@components/common';
import React from 'react';

const PetitionItem = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 0.5fr);
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: ${(props) => props.theme.colors.focus};
  }

  div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  div:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  div:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  a {
    grid-column: 1 / 7;
    grid-row: 2 / 3;
  }
  div:nth-child(5) {
    grid-column: 6 / 7;
    grid-row: 1 / 2;
  }
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 80px 80px 80px 1fr 80px;
    grid-template-rows: repeat(1, 1fr);
    min-height: 64px;

    div {
      grid-column: unset;
      grid-row: unset;
    }

    a {
      grid-column: unset;
      grid-row: unset;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    div:nth-child(5) {
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
    margin: 0;
  }
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
  '승인 대기중': '#ed903e',
  '청원 진행중': '#a8714c',
  '답변 대기중': '#57482b',
  '답변 완료됨': '#ad2e24',
  '승인 반려됨': '#DF3127',
  '청원 만료됨': '#7a1c0b',
};

interface vPetitionItemProps {
  type: Menu;
  id: number;
  categoryName: string;
  title: string;
  createdAt: number;
  tempUrl: string;
  status: PetitionStatus;
}

const VPetitionItem = ({
  type,
  id,
  categoryName,
  title,
  createdAt,
  tempUrl,
  status,
}: vPetitionItemProps): JSX.Element => {
  return (
    <>
      <PetitionItem>
        <PetitionStatus style={{ backgroundColor: statusColor[status] }}>{status}</PetitionStatus>
        <PetitionDescription>{id}</PetitionDescription>
        <PetitionDescription
          style={{ textOverflow: 'ellipsis', width: '80px', whiteSpace: 'nowrap', overflow: 'hidden' }}
        >
          {categoryName}
        </PetitionDescription>
        <PetitionTitle href={`${type}/${type === 'approve' ? tempUrl : id}`}>{title}</PetitionTitle>
        <PetitionDescription>{getDay(createdAt)}</PetitionDescription>
      </PetitionItem>
      <StLine />
    </>
  );
};

export default React.memo(VPetitionItem);
