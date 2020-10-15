function run() {
  let result = [];
  let arrToTest = [
    [1, 2, 3],
    [3, 5, 7],
    [1, 7, 10],
  ];

  for (let j = 0; j < arrToTest.length; j++) {
    result[j] = sum(arrToTest[j]);
    //   console.log('------------');
    //   console.log('result', result);
  }
  console.log(result);
}
function sum(arr) {
  let sum = 0;
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log('arr current value', arr[i]);
    // console.log('sum', sum);
    sum += arr[i];
    // console.log(sum);
  }
  return sum;
}
run();

// [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]	[6, 15, 18]
// [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ]	[6, 5, 20]
