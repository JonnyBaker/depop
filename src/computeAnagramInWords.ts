export const normaliseWord = (word: string): string => {
  if (!word) {
    return;
  }
  return word.split('').sort().join('');
};

export const computeAnagramInWords = (words: string[]): Record<string, string[]> => {
  const anagrams = {};

  words.forEach((word) => {
    const sortedWord = normaliseWord(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });

  return anagrams;
};
