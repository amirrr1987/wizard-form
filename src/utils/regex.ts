export const useRegex = () => {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  const usernameRegex = /^(?:[a-zA-Z0-9_]{4,20})?$/;
  const charsRegex = /[\[\]{}\(\)]/g;

  const isValidEmail = (value: string) => {
    return value.length > 0 && emailRegex.test(value);
  };

  const isValidUsername = (value: string) => {
    return value.length > 0 && usernameRegex.test(value);
  };

  const isValidChars = (value) => {
    return value.length > 0 && charsRegex.test(value);
  };

  return { isValidEmail, isValidUsername, isValidChars };
};
