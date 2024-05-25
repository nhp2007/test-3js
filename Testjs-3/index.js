// q3

// var num1 = [1, 2, 3, 4];
// var num2 = [2, 4, 6, 8];
// var num3 = [];

// function sameElement(num1, num2) {
//   for (var i = 0; i < num1.length; i++) {
//     for (var j = 0; j < num2.length; j++) {
//       if (num1[i] === num2[j]) {
//         num3.push(num1[i]);
//       }
//     }
//   }

//   return num3;
// }

// var result = sameElement(num1, num2);

// console.log(result);

// q5

let arr = [1, 2, 2, 3, 4, 4, 5];

let array1 =[]

function removeDuplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    if (!array1.includes(arr(i))) {
      array1.push(arr[i])

    }
  }
  return array1;
}

 let array1 = removeDuplicate(arr);

console.log(array1);





