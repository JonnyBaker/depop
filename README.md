# anagram
## Chosen Language
Typescript

## Running
Install dependencies
`npm i'

Running the application
 `npm run dev`

To Run the application with a different words file 
`npm run dev -- --anagramFileName example1.txt`

Running the test suit 
`npm test`

## Big O Analysis 
The log notation for this application is O(n²), due to first having to loop through the file line by line, which has a log notation of O(n). I then performed another iteration of the words grouped by length, leading to another O(n). 

## Chosen Approach
To reduce the number of iteration over the data set, I've decided to alphabetize each word's letters. Once alphabetized, I can store the strings as keys and append the actual word to the key's value. Each word will check to see if it's alphabetized version already exists. If it does, it will append the word to the key's value. Otherwise, it will create a new key/value pair. 

## Assumptions
All files will be terminated with an empty line. 
## Improvements
Add unit tests / integration test for findAnagram.js, as AsyncIterable is difficult to mock 
computeAnagramInWords could be changed to use `reduce()` instead of `forEach`