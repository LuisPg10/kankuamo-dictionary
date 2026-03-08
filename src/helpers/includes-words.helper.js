/**
 *
 * @param {any[]} words
 * @param {string} wordToMatch
 * @returns {any[]}
 */
export const includesWordsHelper = (words, wordToMatch) => {
  return words.filter(
    (word) =>
      word.spanish.toLowerCase().includes(wordToMatch) ||
      word.kankuamo.toLowerCase().includes(wordToMatch) ||
      word.english.toLowerCase().includes(wordToMatch),
  );
};
