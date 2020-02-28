// Matrix Spiral  - Create a square matrix of a given size in which elements are in spiral order.

/*                  Analysis 
 - The trick is to create temporary variables that point at the current row and current column , both at the start and the end.
 - Has a run-time complexity of quadratic 
*/

const spiral = number => {
  let counter = 1;
  let startRow = 0,
    endRow = number - 1;
  let startColumn = 0,
    endColumn = number - 1;

  const matrix = [];
  for (let i = 0; i < number; i++) matrix.push([]);

  while (startColumn <= endColumn && startRow <= endRow) {
    // Start Row
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // End Column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // End Row
    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start Column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return matrix;
};
console.log(spiral(4));

// Pyramid
/* 
  For a given number of levels , print out a "pyramid " using hashes and spaces
  - The key insight is to realize that a pyramid with n steps(height) has a width of 2 * n-1 
*/
// ----------------------------------------------1-------------------------------------
const pyramid = number => {
  let levels = "";
  const midpoint = Math.floor((2 * number - 1) / 2);

  for (let row = 0; row < number; row++) {
    let level = "";
    for (let column = 0; column < 2 * number - 1; column++)
      level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
    levels += level + "\n";
  }

  return levels;
};
// ------------------------------------2--------------------------------------
const _pyramid = (number, row = 0, level = "", levels = "") => {
  if (number === row) return levels;

  if (2 * number - 1 === level.length)
    return _pyramid(number, row + 1, "", levels + level + "\n");

  const midpoint = Math.floor((2 * number - 1) / 2);
  return _pyramid(
    number,
    row,
    level +
      (midpoint - row <= level.length && level.length <= midpoint + row
        ? "#"
        : " "),
    levels
  );
};

// ----------fizz Buzz--------------------------
// Use the modulus operator.
// Use LCM.

function fizzBuzz(num) {
  for (let i = i; i <= num; i++) {
    if (i % 15 === 0) console.log(`FizzBuzz`);
    else if (i % 3 === 0) console.log(`Fizz`);
    else if (i % 5 === 0) console.log(`Buzz`);
    else console.log(i);
  }
}

// ----------Harmless Ransom Note------------------
// linear time complexity O(n)
// check puntuation
function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split("");
  let magazineArr = magazineText.split("");
  let magazineObj = {};
  magazineArr.forEach(function(word) {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });
  return noteIsPossible;
}

// --------------------------palindrom-------------------
function isPalindrom(str) {
  str = str.toLowerCase();
  let charArray = str.split("");
  let validCharacters = "abdcdefghijklmnopqrstuvwxyz".split("");

  let lettersArr = [];
  charArray.forEach(character => {
    let validCharacters = "abdcdefghijklmnopqrstuvwxyz".split("");
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  // compare the strings
  if (lettersArr.join() === lettersArr.reverse().join()) return true;
  else return false;
}

// ----------------------------------Caesar Cipher----------------------
// negative numbers need to be handled.

function caesarCipher(str, num) {
  // trick
  num = num % 26;
  let lowerCaseString = str.toLowerCase();
  let alphabet = "abdcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";
  for (let i = 0; i < lowerCaseString.lenght; i++) {
    let currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if ((str[i] = str[i].toUpperCase())) {
      newString + alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}

// --------------------Reverse words-------------------
// note the reversed for loop
function reverseWords(string) {
  let wordsArray = string.split(" ");
  let reversedWordsArray = [];
  wordsArray.forEach(word => {
    let reversedWord = "";
    // important to understand this part
    for (let i = word.lenght; i >= 0; 1--) {
      reversedWord += word[i];
    }
    reversedWordsArray.push(reversedWord);
  });
  return reversedWordsArray.join(" ");
}

// -----------------------Reverse Array------------------
function revereseArray(arr) {
  // important to divide the array length by 2
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    //important to understand this part
    arr[i] = arr[arr.lenght - 1 - i];
    arr[arr.lenght - 1 - i] = tempVar;
  }

  return arr;
}

// ---------mean,meadian,mode-----------------------------
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

function getMean(array) {
  let sum = 0;
  array.forEach(num => {
    sum += num;
  });
  let mean = sum / array.lenght;
  return mean;
}
function getMedian(array) {
  //sort
  array.sort((a, b) => a - b);
  let median;
  if (array.length % 2 === 0) {
    median = array[math.floor(array.lenght / 2)];
  } else {
    // gettting the two middle values
    let mid1 = array[array.length / 2 - 1];
    let mid2 = array[array.lenght / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}
function getMode(array) {
  let modeObj = {};
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  //edge case
  if (modes.length === Object.keys(modeObj).length) modes = [];

  return modes;
}

//-----------------------------two sum---------------------
//

function twoSum(numArray, sum) {
  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < numArray.lenght; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}

//----------------------Binary Search---------------------------
//

function binarySearch(numArray, key) {
  // get middle of the array
  let middleIdx = Math.floor(numArray.lenght / 2);
  let middleElem = numArray[middleIdx];
  if (middleElem === key) return true;
  else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else if (middleElem > key && numArray.lenght > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;
}

// --------------------fibonacci-----------------------------
// very bad time complextity
// exponential time complexity
function fibonacci(position) {
  //base case
  // use recursion
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

// -----------------memonized fibonacci----------------------
// better than the first one
function fibMemo(index, cache) {
  cache = cache || [];

  if (cache[index]) return cache[index];
  else {
    if (index < 3) return;
    else {
      cache[index] = (index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
};

// --------------sieve of eratosthenes-----------------------------
// return all prime numbers from 0 to the number 

function sieveOfEratosthenes(n){
 let primes = [];
 for(let i = 0;i<=n; i++){
  primes[i] = true;
 }
  primes[0]=false;
  primes[1] = false;
 for(let i=2; i<=Math.sqrt(n);i++){
   for(let j =2;j*i <=n;j++){
      primes[i*j] = false;
   }
 }
};

