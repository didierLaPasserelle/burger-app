export const deepClone = (array) => JSON.parse(JSON.stringify(array));

export const isEmpty = (array) => {
    return array.length === 0
}
 