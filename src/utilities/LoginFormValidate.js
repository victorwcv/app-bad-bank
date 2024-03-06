export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "*Enter a username";
  }
  
  if (!values.password) {
    errors.password = "*Enter a password";
  } else if (values.password.length < 8) {
    errors.password = "*Must be at least 8 characters long";
  }
  
  return errors;
};