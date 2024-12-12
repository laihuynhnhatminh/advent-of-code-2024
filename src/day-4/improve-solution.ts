/**
 * Grid Search Algorithm
 * x and y are the coordinates of the starting point
 *
 * Direction to check:
 *
 * (-1, -1) (-1, 0) (-1, 1)
 * ( 0, -1) ( 0, 0) ( 0, 1)
 * ( 1, -1) ( 1, 0) ( 1, 1)
 *
 * x as the col length
 * y as the row length
 *
 * Function run at O(n * m)
 */

import { DATA } from './data';

type Grid = string[][];

// Example 5x5 grid
const grid: Grid = DATA.split('\n')
  .map((s) => s.split('').filter(Boolean))
  .filter(Boolean);
const word = 'XMAS';

export function improvedSolution1() {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;

  const checkDirection = (
    x: number,
    y: number,
    dx: number,
    dy: number,
    word: string,
  ): boolean => {
    for (let k = 0; k < word.length; k++) {
      const nx = x + dx * k;
      const ny = y + dy * k;

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= rows ||
        ny >= cols ||
        grid[nx][ny] !== word[k]
      ) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (const direction of directions) {
        if (checkDirection(i, j, direction[0], direction[1], word)) {
          count++;
        }
      }
    }
  }

  return count;
}

const newWord = 'MAS';
const reverseWord = 'SAM';

/**
 * Is this better? Don't know. It does traverse but doesn't seem to be better than my solution.
 * I did learn a bit about grid traverse algorithm in this case.
 */
export function improvedSolution2() {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const checkDirection = (
    x: number,
    y: number,
    dx: number,
    dy: number,
    word: string,
  ): boolean => {
    for (let k = 0; k < word.length; k++) {
      const nx = x + dx * k;
      const ny = y + dy * k;

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= rows ||
        ny >= cols ||
        grid[nx][ny] !== word[k]
      ) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (
        (checkDirection(i, j, 1, 1, newWord) &&
          checkDirection(i, j + 2, 1, -1, reverseWord)) ||
        (checkDirection(i, j, 1, 1, reverseWord) &&
          checkDirection(i, j + 2, 1, -1, newWord)) ||
        (checkDirection(i, j, 1, 1, newWord) &&
          checkDirection(i, j + 2, 1, -1, newWord)) ||
        (checkDirection(i, j, 1, 1, reverseWord) &&
          checkDirection(i, j + 2, 1, -1, reverseWord))
      ) {
        count++;
      }
    }
  }

  return count;
}
