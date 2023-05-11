import wait from "./wait";
import beep from "./beep.js";

export default {
  name: "Radix",
  getDigitAtPosition(num, atPosition) {
    return Math.floor(Math.abs(num) / Math.pow(10, atPosition)) % 10;
  },

  async fnc(arr) {
    if (!arr.length || arr.length === 1) return arr;

    const biggestNumber = arr.reduce((acc, el) => (el > acc ? el : acc), 0);

    const biggestNumberPositionsCount = biggestNumber.toString().length;

    for (let position = 0; position < biggestNumberPositionsCount; position++) {
      let buckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < arr.length; i++) {
        buckets[this.getDigitAtPosition(arr[i], position)].push(arr[i]);
      }
      await beep(1000, 800, 6);

      arr.length = 0;
      arr.push(...buckets.flat());
    }

    return arr;
  },

  code: `
  function BubbleSort(array){
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array
  };
  `,
};
