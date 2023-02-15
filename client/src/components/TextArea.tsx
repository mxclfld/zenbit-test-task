import React from 'react';
import { StyledTextArea } from './styles/TextArea.styled';

type TextAreaProps = {
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <StyledTextArea
      rows={4}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
    ></StyledTextArea>
  );
};

export default TextArea;
