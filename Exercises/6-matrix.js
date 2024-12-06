'use strict';

const max = (matrix) => {
  let value = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; 0 < row.length; j++) {
      const cell = row[j];
      if (value < cell) value = cell;
    }
  }
  return value;
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
};

module.exports = { max };
