export const useRegex = () => {
  const email = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim;
  const username = /^(?:[a-zA-Z0-9_]{4,20})?$/;
  const chars = /[\[\]{}\(\)]/g;
  return { email, chars, username };
};
