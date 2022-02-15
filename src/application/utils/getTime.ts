export const getDayTime = (str: string) => {
  const replacedStr = str.replace('T', ' ');
  const date = new Date(replacedStr);
  return date.toLocaleString('sv-SE').substring(5, 16);
};

export const getTime = (str: string) => {
  const replacedStr = str.replace('T', ' ');
  const date = new Date(replacedStr);
  return date.toLocaleString('sv-SE').substring(11, 16);
};

export const getDay = (str: string) => {
  const replacedStr = str.replace('T', ' ');
  const date = new Date(replacedStr);
  return date.toLocaleString('sv-SE').substring(5, 10);
};
