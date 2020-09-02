"use strict";
let counter = 0;
const array = [counter];

window.addEventListener("load", countingArray);

function countingArray() {
  counter++;
  console.log(array);
  array.unshift(counter);

  if (array.length === 10) {
    array.pop();
  }

  setTimeout(countingArray, 1000);
}
