function reverseArray<T>(array: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

// Test qilish
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = reverseArray(originalArray);
console.log(reversedArray); // Natija: [5, 4, 3, 2, 1]

function findMinMax(array: number[]): [number, number] {
  if (array.length === 0) {
    throw new Error("Massiv bo'sh.");
  }

  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  return [min, max];
}

// Test qilish
const array: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const [min, max] = findMinMax(array);
console.log("Eng kichik element:", min);
console.log("Eng katta element:", max);


//3-masala
function separateEvenOdd(array: number[]): { even: number[]; odd: number[] } {
  const even: number[] = [];
  const odd: number[] = [];

  for (let num of array) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return { even, odd };
}

// Test qilish
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const separatedNumbers = separateEvenOdd(arr);
console.log("Juft sonlar:", separatedNumbers.even);
console.log("Toq sonlar:", separatedNumbers.odd);
