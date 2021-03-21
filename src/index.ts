import { findAnagrams } from './findAnagrams';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).options({
  anagramFileName: { type: 'string', default: 'example1.txt' },
}).argv;

findAnagrams(argv.anagramFileName);
