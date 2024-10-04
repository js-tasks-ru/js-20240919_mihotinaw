/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fields = path.split('.');

  return function getter(obj) {
    let newObj = obj;
    for (const field of fields) {
      if (!Object.hasOwn(newObj, field)) {
        return;
      }
      newObj = newObj[field];
    }
    return newObj;
  };
}
