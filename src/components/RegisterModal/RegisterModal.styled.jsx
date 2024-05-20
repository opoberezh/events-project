import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 4px;
`;

export const StyledField = styled(Field)`
  margin-top: 18px;
  width: 100%;
  height: 54px;
  border-radius: 10px;
  border: 1px solid #1214171a;
  padding: 16px;
  font-size: 18px;
  color: #121417;
  outline: none;

  &:hover,
  &:focus {
    border-color: #1e90ff;
  }
`;

export const ErrorMessageStyled = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin: 0 0 0 16px;
  color: #900c3f;
`;

export const SignUpButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 60px;
  margin-top: 30px;
  padding: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #1256da;

  font-weight: 700;
  font-size: 18px;
  color: #ffffff;

  transition:
    background-color 0.3s,
    color 0.3s,
    border 0.3s;

  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #1e90ff;
    border: 2px solid #1e90ff;
  }
`;

export const RadioTitle = styled(Form)`
  margin: 30px 0 0 5px;
  font-size: 18px;
`;

export const RadioGroup = styled.div`
  display: flex;
  font-size: 18px;

  margin: 10px 0 0 5px;
  gap: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioField = styled(Field)`
  appearance: none;

  min-width: 18px;
  min-height: 18px;

  font: inherit;

  background-color: paper;

  border: 2px solid #1e90ff;
  border-radius: 50%;

  &:checked {
    background: radial-gradient(circle, #1e90ff 40%, transparent 50%);
    border: 2px solid #1e90ff;
  }
  margin-right: 5px;
`;
