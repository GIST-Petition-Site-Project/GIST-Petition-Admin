import styled from 'styled-components';

const LoginFormBlock = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: black;
    margin-bottom: 1rem;
  }
`;

const SInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &.focus {
    color: $oc-teal-7;
    border-bottom: 1px solid gray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export { LoginFormBlock, SInput };
