import { computeAnagramInWords, normaliseWord } from './computeAnagramInWords';

describe('normaliseWord', () => {
  it('should return undefined if word is undefined', () => {
    expect(normaliseWord(undefined)).toBeUndefined();
  });

  it('should return undefined if word is null', () => {
    expect(normaliseWord(null)).toBeUndefined();
  });

  it('should alphabetize word', () => {
    expect(normaliseWord('gfedcba')).toEqual('abcdefg');
  });
});

describe('computeAnagramInWords', () => {
  it('should alphabetize each word and add matching words together', () => {
    const words = ['abc', 'cba', 'bac'];

    const anagrams = computeAnagramInWords(words);
    expect(anagrams).toEqual({ abc: ['abc', 'cba', 'bac'] });
  });

  it('should alphabetize each word and add create a new key for each unique anagram', () => {
    const words = ['abc', 'ret', 'tyu', 'fed'];

    const anagrams = computeAnagramInWords(words);
    expect(anagrams).toEqual({ abc: ['abc'], def: ['fed'], ert: ['ret'], tuy: ['tyu'] });
  });
});
