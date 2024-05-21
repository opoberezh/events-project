import styled from '@emotion/styled';

export const SortWrapper = styled.div`
  margin: 0 0 30px 0;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  color: #1e90ff;
  font-weight: 600;
  text-shadow:
    0px 3px 1px rgba(0, 0, 0, 0.1),
    0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const StyledSelected = styled.select`
  width: 150px;
  height: 50px;
  font-size: 18px;
  border: 2px solid #1256da;
  border-radius: 10px;
  padding: 5px;
  outline: none;
  box-shadow:
    0px 3px 1px rgba(0, 0, 0, 0.1),
    0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  transaction: border-color 0.3s;

  &:hover,
  &:focus {
    border-color: #1e90ff;
  }
`;

export const StyledOption = styled.option`
  font-size: 20px;
`;
