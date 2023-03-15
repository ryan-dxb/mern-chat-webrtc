export const validateLoginForm = (email, password) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isEmailValid && isPasswordValid;
};

const validateEmail = (email) => {
  if (email.length === 0) {
    return false;
  }

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  return emailPattern.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 12;
};
