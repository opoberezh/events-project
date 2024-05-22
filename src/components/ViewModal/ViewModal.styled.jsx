import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const TextWrapper = styled.div`
  margin: 30px 0 0 0;
  min-width: 50%;
`;

export const StyledText = styled.p`
  font-size: 22px;
`;

export const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: #f5f5f5;
    border-radius: 10px;
    outline: none;
 
    
  }
  .MuiInputBase-input {
    padding:  10px;
    height: 30px;
    font-size: 18px;
    
  }
  .MuiInputLabel-root {
    color: #888888;
    transform: none;
    &.Mui-focused {
      color: #888888;
    }
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #cccccc;
    }
    &:hover fieldset {
      border-color: #888888;
    }
    &.Mui-focused fieldset {
      border-color: #1e90ff;
    }
  }
`;