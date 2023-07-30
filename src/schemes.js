import * as yup from "yup";

export const emailChangeScheme = yup.string().email("Почта не валидна.");

export const passwordChangeScheme = yup
  .string()
  .matches(/\d/, "Пароль должен содержать хотя бы одну цифру.")
  .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву.")
  .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву.");

  export const passwordBlureScheme = yup
  .string()
  .min(4, "Пароль должне быть от четырех символов.");


  export const validateAndGetErrorMessage = (scheme, value) => {
  let errorMessage = null;

  try {
    scheme.validateSync(value);
  } catch ({ errors }) {
    errorMessage = errors[0];
  }
  return errorMessage;
};
