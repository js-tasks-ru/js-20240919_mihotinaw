/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj === 'object') {
    if (Object.keys(obj).length > 0) {
      let arrObj = Object.entries(obj);
      let newArr = arrObj.map(([key, value])=> [value, key]);

      return Object.fromEntries(newArr);
    } else { return {}; }
  } else { return undefined; }
}
