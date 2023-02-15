import React from 'react';
import { StyledInput } from './styles/Input.styled';

type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <StyledInput
      autoComplete="off"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    ></StyledInput>
  );
};

export default Input;
