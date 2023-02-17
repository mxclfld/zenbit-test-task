import { ModalButton } from './styles/ModalButton.styled';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 150%;
  min-width: 100%;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.1);
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;
  padding: 4rem 8rem;
  border-radius: 10px;
  font-size: 1.3rem;
`;

type ModalProps = {
  setIsSuccess: (isSuccess: boolean) => void;
};

const Modal = ({ setIsSuccess }: ModalProps) => {
  return (
    <StyledWrapper>
      <StyledModal>
        <div>Thank you for your message!</div>
        <ModalButton onClick={() => setIsSuccess(false)}>
          Close window
        </ModalButton>
      </StyledModal>
    </StyledWrapper>
  );
};

export default Modal;
