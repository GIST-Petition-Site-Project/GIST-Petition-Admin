import qs from 'qs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IPagination {
  totalPages: number;
  number: number;
}

const Flex = styled.div`
  margin-top: auto;
  height: 5em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;
  text-align: center;
`;

const PageButton = styled.button`
  height: 2em;
  width: 2em;
  border-radius: 50%;
  border: none;
  color: ${(props) => props.theme.colors.text};
  background: transparent;
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.colors.gistRed};
    color: white;
  }
`;

const CurrentButton = styled(PageButton)`
  background: ${(props) => props.theme.colors.gistRed};
  text-align: center;
  color: white;
`;

const VPagination = ({ totalPages, number }: IPagination) => {
  const offset = 2;
  const start = Math.max(0, number - offset);
  const end = Math.max(Math.min(totalPages - 1, number + offset), 0);
  const leftIndices = Array(number - start)
    .fill(0)
    .map((_v, i) => i + start);

  const rightIndices = Array(end - number)
    .fill(0)
    .map((_v, i) => i + number + 1);

  const navigate = useNavigate();
  const handleClick = (_event: React.MouseEvent<HTMLButtonElement>, page: number) => {
    const queryParams = {
      ...qs.parse(location.search.replace('?', '')),
      page,
    };
    navigate({ pathname: location.pathname, search: qs.stringify(queryParams) });
  };

  return (
    <Flex>
      {number > 0 ? <PageButton onClick={(e) => handleClick(e, 0)}>{`<`}</PageButton> : null}
      {leftIndices.map((idx) => (
        <PageButton key={`page_${idx}`} onClick={(e) => handleClick(e, idx)}>
          {idx + 1}
        </PageButton>
      ))}
      <CurrentButton>{number + 1}</CurrentButton>
      {rightIndices.map((idx) => (
        <PageButton key={`page_${idx}`} onClick={(e) => handleClick(e, idx)}>
          {idx + 1}
        </PageButton>
      ))}
      {number < totalPages - 1 ? <PageButton onClick={(e) => handleClick(e, totalPages - 1)}>{`>`}</PageButton> : null}
    </Flex>
  );
};

export default React.memo(VPagination);
