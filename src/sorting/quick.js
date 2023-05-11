import wait from "./wait";
import beep from "./beep.js";

export default {
  name: "Quick",

  async partition(arr, low, high) {
    let pivot = arr[high];

    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        await beep(100, 15000, 80);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    await beep(100, 15000, 80);
    return i + 1;
  },

  async fnc(arr, col) {
    let l = 0;
    let h = arr.length - 1;
    let stack = new Array(h - l + 1);
    stack.fill(0);

    let top = -1;

    stack[++top] = l;
    stack[++top] = h;

    while (top >= 0) {
      h = stack[top--];
      l = stack[top--];

      let p = await this.partition(arr, l, h);

      if (p - 1 > l) {
        stack[++top] = l;
        stack[++top] = p - 1;
        col.value = p - 1;
      }

      if (p + 1 < h) {
        stack[++top] = p + 1;
        stack[++top] = h;
        col.value = h;
      }
      await beep(100, 15000, 80);
    }
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
