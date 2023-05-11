import beep from "./beep.js";

export default {
  name: "Merge",
  async fnc(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);
    
    return this.merge(this.fnc(left), this.fnc(right));
  },
  merge(left, right) {
    const output = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        output.push(left.shift());
      } else {
        output.push(right.shift());
      }
    }

    while (left.length) {
      output.push(left.shift());
    }

    while (right.length) {
      output.push(right.shift());
    }

    return output;
  },
  code: `
  `,
};
