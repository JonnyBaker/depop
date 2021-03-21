import fs from 'fs';
import readline from 'readline';
import path from 'path';

export const getWordStream = (filePath: string): AsyncIterable<string> => {
  return readline.createInterface(fs.createReadStream(path.join(__dirname, filePath)));
};
