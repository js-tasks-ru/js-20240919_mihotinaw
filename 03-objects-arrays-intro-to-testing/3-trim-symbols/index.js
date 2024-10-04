/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) { return ''; }
  if (!size) { return string; }
  let arrLetters = string.split('');
  let duplicateLetterCounter = 1;
  let ArrLettersFilter = arrLetters.filter(toDupLetter);

  function toDupLetter(letter, ind, arr) {
    if (ind < 1) { return true; }
    else {
      if (letter === arr[ind - 1]) {
        if (duplicateLetterCounter < size) {
          duplicateLetterCounter++;
          return true;
        }
      } else {
        duplicateLetterCounter = 1;
        return true;
      }
    }
  }

  return ArrLettersFilter.join('');
}
