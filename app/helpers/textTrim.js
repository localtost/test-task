export const textTrim = (text) =>
  text.length > 15 ? text.slice(0, 30) + '...' : text;
