'use strict';

const sum = (...args) => {
  let value = 0;
  do {
    value += args.pop();
  }
  while (args.length > 0);
  return value;
  // Use do..while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
