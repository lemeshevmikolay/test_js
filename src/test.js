//цикл виводу від 5 до 1

for (let i = 3; i > 0; i--) {
  console.log("Running in Node.js. Result:", i);
}

/*
  Напиши функцію factorial , яка приймає натуральне число N
  та повертає його факторіал (добуток чисел від 1 до N включно).
 */

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function factorial_log(n) {
  console.log(factorial(n));
}

factorial_log(5); // виведе 120


/*
Напиши функцію sumFromTo, яка приймає два цілих числа min і max
та повертає суму всіх цілих чисел від min до max включно.
*/

function return_suma_min_max(min, max) {
  let result = 0;
  for (let i = min; i <= max; i++) {
    result = result + i;
  }
  return result
}

function return_suma_min_max_log(min, max) {
  console.log(return_suma_min_max(min, max));
}

return_suma_min_max_log (6,7)

//result
/*

Напиши функцію runningSum, яка приймає масив чисел
та повертає масив його «кумулятивних сум»,
тобто суму всіх елементів до поточного. Наприклад:

runningSum([3, 1, 2, 10, 1]); // [3, 4, 6, 16, 17]
 */

function runningSum(nums) {
  const lenth = nums.length;
  let result = 0;
  const resultMassive = [];

  for (let i = 0; i < lenth; i++) {
    result = result + nums[i];

    resultMassive[i] = result;
  }

  console.log(resultMassive);
}

runningSum([1, 2, 3, 4, 5]);


/*
Дано ціле число n, поверніть будь-який масив,
що містить n унікальних цілих чисел, сума яких дорівнює 0.

Приклад:
Input: n = 5
Output: [-7, -1, 1, 3, 4]
Explanation: Також приймаються ці масиви [-5, -1, 1, 2, 3], [-3, -1, 2, -2, 4].
*/

function random_0(n) {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumbers = Array.from({ length: n-1 }, () => getRandomNumber(1, 100));

  let sum = 0;
  let diff = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    sum = sum + randomNumbers[i];
  }

  diff =-sum;

  randomNumbers.push(diff);

  console.log(randomNumbers);
}

random_0(6);



function sumZero(n) {
  const result = [];

  if (n % 2 !== 0) {
    result.push(0);
  }

  for (let i = 1; result.length < n; i++) {
    result.push(i, -i);
  }

  console.log(result);
}


sumZero(6)