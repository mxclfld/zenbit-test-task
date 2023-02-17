import { StyledWrapper } from './styles/Wrapper.styled';
import { StyledModal } from './styles/Modal.styled';
import { ModalButton } from './styles/ModalButton.styled';

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
