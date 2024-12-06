'use strict';

const sum = (...args) => {
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let value = 0;
  for (let i = 0; i < args.length; i++) {
    value += args[i];
  }
  return value;
};

module.exports = { sum };
