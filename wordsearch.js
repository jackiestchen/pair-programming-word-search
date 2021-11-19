const transpose = (array) => {
  return array[0].map((col, i) => array.map(col => col[i]));
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const wordReverse = word.split('').reverse().join('');
  for (l of horizontalJoin) {
    if (l.includes(word) || l.includes(wordReverse)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word) || l.includes(wordReverse)) return true;
  }
  return false;
};

module.exports = wordSearch;