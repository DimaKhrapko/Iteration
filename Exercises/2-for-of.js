'use strict';

const sum = (...args) => {
  let value = 0;
  for (const key of args) {
    value += key;
  }
  return value;
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
