import React, { useState } from 'react';
import Input from './Input';
import { StyledButton } from './styles/Button.styled';
import { Error } from './styles/Error.styled';
import TextArea from './TextArea';
import axios from 'axios';
import { validateForm } from './utils/validateForm';
import Modal from './Modal';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm(name, email, message, setError)) {
      axios
        .post('http://localhost:3000/feedback', {
          name,
          email,
          message,
        })
        .then(() => {
          setIsSuccess(true);
          clearForm();
        });
    }
  };

  return (
    <form>
      <Input
        name="name"
        placeholder="Your name*"
        value={name}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Input
        name="email"
        placeholder="Your e-mail*"
        value={email}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <TextArea
        name="message"
        placeholder="Your message*"
        value={message}
        handleChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
      />
      {error && <Error>{error}</Error>}
      <StyledButton type="submit" onClick={onButtonClick}>
        Send message
      </StyledButton>
      {isSuccess && <Modal setIsSuccess={setIsSuccess} />}
    </form>
  );
};

export default Form;
