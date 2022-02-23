import { StSelect, Title } from '@components/common';
import styled from 'styled-components';

interface IProps {
  from: number;
  to: number;
  count: number;
  fromChange: any;
  toChange: any;
}

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

const VRevisionSelector = ({ from, to, count, fromChange, toChange }: IProps): JSX.Element => {
  const fromSelector = Array((count || 1) - 1 || 1)
    .fill(0)
    .map((_x, i) => i);
  const toSelector = Array((count || 1) - 1 || 1)
    .fill(0)
    .map((_x, i) => i + 1);
  console.log(fromSelector, toSelector);

  return (
    <Flex>
      <Title>청원 변경 이력</Title>
      <SelectWrapper>
        <StSelect value={from} onChange={fromChange}>
          <optgroup label="FROM">
            {fromSelector.map((el) => (
              <option key={'from' + el} value={el}>
                {el === 0 ? '원본' : `${el}번째 수정본`}
              </option>
            ))}
          </optgroup>
        </StSelect>
        <StSelect value={to} onChange={toChange}>
          <optgroup label="FROM">
            {toSelector.map((el) => (
              <option key={'to' + el} value={el}>
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
