import styled from 'styled-components';

export const ModalButton = styled.button`
  display: block;
  padding: 1.75rem 3.25rem;
  margin-top: 1.5rem;

  border-radius: 500px;
  border: 0px;

  font-size: 1.125rem;
  color: white;
  background: #fad34f;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.2s;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.2s;
  }
`;
