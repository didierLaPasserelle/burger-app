export const deepClone = (array) => JSON.parse(JSON.stringify(array));

export const find = (array, id) => {
  return array.find((item) => item.id === id);
};
