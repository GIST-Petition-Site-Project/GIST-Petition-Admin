import { StSelect, Title } from '@components/common';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

interface vRevisionSelectorProps {
  from: number;
  to: number;
  count: number;
  fromChange: React.ChangeEventHandler<HTMLSelectElement>;
  toChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const VRevisionSelector = ({ from, to, count, fromChange, toChange }: vRevisionSelectorProps): JSX.Element => {
  const fromSelector = Array((count || 1) - 1 || 1)
    .fill(0)
    .map((_x, i) => i);
  const toSelector = Array((count || 1) - 1 || 1)
    .fill(0)
    .map((_x, i) => i + 1);

  return (
    <Flex>
      <Title>청원 변경 이력</Title>
      <SelectWrapper>
        <StSelect value={from} onChange={fromChange}>
          <optgroup label="FROM">
            {fromSelector.map((el) => (
              <option key={'from_' + el} value={el}>
                {el === 0 ? '원본' : `${el}번째 수정본`}
              </option>
            ))}
          </optgroup>
        </StSelect>
        <StSelect value={to} onChange={toChange}>
          <optgroup label="To">
            {toSelector.map((el) => (
              <option key={'to_' + el} value={el}>
                {el >= count - 1 ? '최종본' : `${el}번째 수정본`}
              </option>
            ))}
          </optgroup>
        </StSelect>
      </SelectWrapper>
    </Flex>
  );
};

export default VRevisionSelector;
