export const required = value => {
  if(value) return undefined;
  return "Поле не може бути пустим";
};

export const maxLength = (maxLength) => (value) => {
  if(value.length > maxLength) return `Поле більше ${maxLength} символів`;
  return undefined;
};
