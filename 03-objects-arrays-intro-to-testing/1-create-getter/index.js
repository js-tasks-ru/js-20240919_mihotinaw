/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arrKey = path.split('.');

  return function getter(obj) {
    let newObj = obj;
    if (Object.keys(obj).length > 0) {
      for (const field of arrKey) {
        newObj = newObj[field]
      }
      return newObj;
    } else {
      return undefined;
    }
  };

}
