'use strict';

const sum = (...args) => {
  let value = 0;
  let i = 0;
  while (i < args.length) {
    value += args[i];
    i++;
  }
  return value;
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
