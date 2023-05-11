import wait from "./wait";
import beep from "./beep.js";

export default {
  name: "Insert",
  fnc: async (array, currentCol) => {
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      let j;
      currentCol.value = i;

      const frequency = 1000 - array[i] * 2;

      beep(100, frequency, 70);
      for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
        await beep(1, frequency, 70);
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
      array[j + 1] = currentValue;
    }
  },
  code: `
  function InsertSort(array){
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      let j;
      for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
      array[j + 1] = currentValue;
    }

    return array
  };
  `,
};
