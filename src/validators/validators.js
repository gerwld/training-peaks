import AuthService from "../api/AuthService";

export const required = (value) => (value ? undefined : "Required");

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const isPasswordValid = async (value, email) => {
  if (value) {
    const fetch = await AuthService.getAuth({ password: value, email }).catch((e) => e);
    return fetch.status === 200;
  }
};

export const validatePass = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else {
    if (/[^ -~]/.test(values.password)) {
      errors.password = "Must only contain ASCII characters";
    }
    if (values.password.length < 10) {
      errors.password = "Must be at least 10 characters long";
    }
    if (!/[A-Z]/.test(values.password)) {
      errors.password = "Must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(values.password)) {
      errors.password = "Must contain at least one lowercase letter";
    }
    if (!/\d/.test(values.password)) {
      errors.password = "Must contain at least one number";
    }
    if (!/[\W_]/.test(values.password)) {
      errors.password = "Must contain at least one special symbol";
    }
  }
  if (values.confirmPassword && values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }
  return errors;
};
