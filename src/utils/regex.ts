export const useRegex = () => {
  const email = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  const chars = /[[](){}]/g;

  return { email, chars };
};
