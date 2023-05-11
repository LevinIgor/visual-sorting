import wait from "./wait";
import beep from "./beep.js";

export default {
  name: "Bubble",
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
  fnc: async (array, currentCol) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        const frequency = 800 - array[j + 1] * 5;
        await beep(20, frequency, 50);
        currentCol.value = j + 1;
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  },
};
