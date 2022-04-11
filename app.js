const arr1 = [3, 5];
const arr2 = [2, 7, 3];
const arr3 = [6];

// create unique array (Set) & sort
const createUniqueSortedArray = (array) => {
  // new Set gets rid of duplicates, and flat moves 2d array to 1d
  // return sorted array
  const uniqueArray = [...new Set(array.flat())];
  return uniqueArray.sort();
};

const findGaps = (...args) => {
  // create unique array
  const uniqueSortedArr = createUniqueSortedArray(args);
  let numberOfGaps = 0;
  // keep count o current number (start at first  - 2 in this example)
  let currentNumber = uniqueSortedArr[0];

  // loop through array
  // increase current number by one each loop
  // dont run if first number or less (ie 0,1,2 here)
  // increase nuber of gaps if the looped number is not equal to current number
  uniqueSortedArr.forEach((number) => {
    currentNumber += 1;
    if (!(number <= uniqueSortedArr[0])) {
      if (number !== currentNumber) {
        // console.log(`current number: ${currentNumber}`);
        // console.log(`number: ${number}`);
        numberOfGaps += 1;
        console.log(`gap number found: ${currentNumber}`);
        console.log(`new total gaps: ${numberOfGaps}`);
      }
    }
  });

  return numberOfGaps;
};

findGaps(arr1, arr2, arr3);

module.exports = findGaps;
