import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import Input from './Input';
import { StyledButton } from './styles/Button.styled';
import { Error } from './styles/Error.styled';
import TextArea from './TextArea';

const Form = () => {
  const [values, handleChange] = useForm({ name: '', email: '', message: '' });
  const [error, setError] = useState<string>('');

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => setError(''), 5000);
  };

  const validateForm = (name: string, email: string, message: string) => {
    if (!(name && email && message)) {
      handleError('All fields are required!');
    } else if (name.length < 3) {
      setError('Your name should be at least 3 characters long.');
    } else if (message.length < 30) {
      setError('Your message should be at least 30 characters long.');
    } else {
      setError('');
    }
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, email, message } = values;
    validateForm(name, email, message);
  };
  return (
    <form>
      <Input
        name="name"
        placeholder="Your name*"
        value={values.name}
        handleChange={handleChange}
      />
      <Input
        name="email"
        placeholder="Your e-mail*"
        value={values.email}
        handleChange={handleChange}
      />
      <TextArea
        name="message"
        placeholder="Your message*"
        value={values.message}
        handleChange={handleChange}
      />
      {error && <Error>{error}</Error>}
      <StyledButton type="submit" onClick={onButtonClick}>
        Send message
      </StyledButton>
    </form>
  );
};

export default Form;
