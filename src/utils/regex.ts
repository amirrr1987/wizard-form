export const useRegex = () => {
  const email = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim;
  const username = /^(?:[a-zA-Z0-9_]{4,20})?$/;
  const chars = /[\[\]{}\(\)]/g;

  const isValidEmail = (value: string) => {
    return value.length > 0 && email.test(value);
  };

  const isValidUsername = (value: string) => {
    return value.length > 0 && username.test(value);
  };

  const isValidChars = (value) => {
    return value.length > 0 && chars.test(value);
  };

  return {
    isValidEmail,
    isValidUsername,
    isValidChars,
    email,
    username,
    chars,
  };
};
