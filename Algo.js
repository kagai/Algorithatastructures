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

function fizzBuzz(num){
  for(let i =i ;i <= num; i++){
     if(i % 15  === 0) console.log(`FizzBuzz`);
     else if(i % 3 ===0) console.log(`Fizz`);
     else if(i % 5 === 0) console.log(`Buzz`);
     else console.log(i);
  }
};

// ----------Harmless Ransom Note------------------
// linear time complexity O(n)
// check puntuation
function harmlessRansomNote(noteText, magazineText){
       let noteArr = noteText.split('');
       let magazineArr = magazineText.split('');
       let magazineObj = {};
      magazineArr.forEach(function(word){
       if(!magazineObj[word]) magazineObj[word] = 0;
       magazineObj[word] ++;
      });
      let noteIsPossible = true;
     noteArr.forEach((word)=>{
        if(magazineObj[word]){
            magazineObj[word] --;
            if(magazineObj[word] <0) noteIsPossible =false;
        }
        else noteIsPossible = false;
     });
     return noteIsPossible;
};

// --------------------------palindrom-------------------
function isPalindrom(str){
str = str.toLowerCase();
let charArray = str.split('');
let validCharacters = 'abdcdefghijklmnopqrstuvwxyz'.split('');

let lettersArr= [];
charArray.forEach((character)=>{
let validCharacters = 'abdcdefghijklmnopqrstuvwxyz'.split('');
  if(validCharacters.indexOf(char)>-1) letters.push(char);
});

if(lettersArr.join()=== lettersArr.reverse().join()) return true;
else return false ;

};