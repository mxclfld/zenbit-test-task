import React, { useState } from 'react';

export type FormProps = {
  name: string;
  email: string;
  message: string;
};

export const useForm = (initialValues: FormProps) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ] as [
    FormProps,
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void
  ];
};
