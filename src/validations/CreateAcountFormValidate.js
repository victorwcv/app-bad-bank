export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "*Required field";
  }
  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "*Invalid email address";
  }
  if (!values.password) {
    errors.password = "*Required field";
  } else if (values.password.length < 8) {
    errors.password = "*Must be at least 8 characters long";
  }
  
  return errors;
};
