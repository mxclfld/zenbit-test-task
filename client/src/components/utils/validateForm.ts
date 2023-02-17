const handleError = (errorMessage: string, callback: (msg: string) => void) => {
  callback(errorMessage);
  setTimeout(() => callback(''), 5000);
};

const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateForm = (
  name: string,
  email: string,
  message: string,
  callback: (msg: string) => void
) => {
  if (!(name && email && message)) {
    handleError('All fields are required!', callback);
    return false;
  } else if (name.length < 3) {
    handleError('Your name should be at least 3 characters long.', callback);
    return false;
  } else if (!validateEmail(email)) {
    handleError('Your email should be like email@example.com!', callback);
    return false;
  } else if (message.length < 30) {
    handleError(
      'Your message should be at least 30 characters long.',
      callback
    );
    return false;
  } else {
    callback('');
    return true;
  }
};
