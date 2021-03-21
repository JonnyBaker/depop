import { computeAnagramInWords } from './computeAnagramInWords';
import { getWordStream } from './getWordStream';

const printAnagramResults = (anagrams: Record<string, string[]>): void => {
  Object.values(anagrams).map((anagram) => console.error(anagram.join(', ')));
};

export async function findAnagrams(fileName: string): Promise<void> {
  let words = [];
  let lastWordLength: number;

  for await (const word of getWordStream(`/resources/${fileName}`)) {
    if (word.length > lastWordLength || word.length === 0) {
      const anagrams = computeAnagramInWords(words);
      printAnagramResults(anagrams);
      words = [];
    }
    lastWordLength = word.length;
    words.push(word);
  }
}
