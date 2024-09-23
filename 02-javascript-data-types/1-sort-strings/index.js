/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  return arr.slice().sort((a, b) => {
    let locales = ['ru-RU-u-kf-upper', 'en-US-u-kf-upper'];

    if (param === 'asc') {
      return a.localeCompare(b, locales);
    } else {
      return  b.localeCompare(a, locales);
    }
  });
}
