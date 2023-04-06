///1. o/p=> 0 100 200 300 400 500 600 700 800 900 1000

// const num1 = () => {
//   for (let i = 0; i <= 1000; i += 100) {
//     console.log(i);
//   }
// };

// num1();

///////////////
///2. o/p=>1 2 4 8 16 32 64 128

// const num2 = (pow) => {
//   for (let i = 0; i < pow; i++) {
//     console.log(2 ** i);
//   }
// };

// num2(8);

///////////////
///////3. o/p=>0 2 4 6 8 10

// const num3 = () => {
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// };
// num3();

//////////
///4. o/p=>3 6 9 12 15

// const num4 = (num) => {
//   for (let i = 0; i <= num; i++) {
//     if (i % 3 === 0 && i > 0) {
//       console.log(i);
//     }
//   }
// };
// num4(15);

///////////
///5.o/p=>9 8 7 6 5 4 3 2 1 0

// const num5 = () => {
//   for (let i = 9; i >= 0; i--) {
//     console.log(i);
//   }
// };
// num5();

/////////////////
////////6. o/p=>1 1 1 2 2 2 3 3 3 4 4 4

const num6 = (count) => {
  for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= count; i++) {
      console.log(j);
    }
  }
};
num6(3);
