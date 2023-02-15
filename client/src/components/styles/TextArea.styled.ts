import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  line-height: 2.025rem;
  font-size: 1.125rem;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  padding: 1.875rem 2.875rem;
  margin-bottom: 0.5rem;
  width: 100%;
  resize: none;
  &::placeholder {
    color: #2d2d2d;
  }
  &:focus {
    outline: none;
    border: 1px solid #dcdcdc;
    box-shadow: 0 0 5px #dcdcdc;
  }
`;
