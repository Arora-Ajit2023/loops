// @ts-nocheck
// 1. Write a JS code to print numbers from 1 to 10

// const printNum = () => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// };

// printNum();

// 2. Write a JS code to print a 2D array

// const PrintArr = (ar) => {
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j < ar[0].length; j++) {
//       console.log(ar[i][j]);
//     }
//   }
// };

// PrintArr([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);

// 3. Write a JS code to print Even numbers in given array

// var arr = [13, 23, 12, 45, 22, 48, 66, 100];
// function evenNum(ar) {
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] % 2 === 0) {
//       console.log(ar[i]);
//     }
//   }
// }

// evenNum(arr);

////////////////////////////
///////////4. Write a JS code to delete all occurrence of element in given array

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56, 4, 78];

// const DeleteNumOccurence = (ar, num) => {
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] === num) {
//       ar.splice(i, 1);
//     }
//   }
//   return console.log(ar);
// };

// DeleteNumOccurence(arr, 78);

////////////
//5. Write a JS code to demonstrate Async loop

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 5000);
// }

/////////////////
////6. Write a JS code to find the power of a number using for loop

// const PoweerNum = (num, power) => {
//   let result = 1;
//   for (let i = 0; i < power; i++) {
//     result = result * num;
//   }
//   return console.log(result);
// };

// PoweerNum(5, 5);

///////////////
///7. Write a JS code to print a pattern using for loop

// function printPattern(range) {
//   for (let i = 1; i <= range; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//       str += j + ' ';
//     }
//     console.log(str);
//   }
// }
// printPattern(8);

//////////////
/////10. Write a JS code to find the largest number in an array

// const arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

// let largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   // if (typeof ar[i] !== 'number' || Number.isNaN(ar[i])) {
//   //   return 'Not A number';
//   // }
//   largest = arr[i] > largest ? arr[i] : largest;
// }

// console.log(largest);

///////////////////
/////11. Write a JS code to find the number of zeros in 2D Matrix
// const arr = [
//   [0, 1, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     count = arr[i][j] === 0 ? count + 1 : count;
//   }
// }
// console.log(count);
