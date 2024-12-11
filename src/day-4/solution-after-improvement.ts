/**
 * Grid Search Algorithm
 *
 */
type Grid = string[][];

// Function to search for a word or its reverse in a grid
function searchWord(grid: Grid, word: string): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const wordLength = word.length;

  // Reverse the word
  const reverseWord = word.split('').reverse().join('');

  // Helper to check if a word exists in a specific direction
  const checkDirection = (
    x: number,
    y: number,
    dx: number,
    dy: number,
    target: string,
  ): boolean => {
    for (let k = 0; k < target.length; k++) {
      const nx = x + k * dx;
      const ny = y + k * dy;
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= rows ||
        ny >= cols ||
        grid[nx][ny] !== target[k]
      ) {
        return false;
      }
    }
    return true;
  };

  // Search in all directions for both word and reverseWord
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (
        checkDirection(i, j, 0, 1, word) || // Horizontal (right)
        checkDirection(i, j, 0, 1, reverseWord) || // Horizontal (left)
        checkDirection(i, j, 1, 0, word) || // Vertical (down)
        checkDirection(i, j, 1, 0, reverseWord) || // Vertical (up)
        checkDirection(i, j, 1, 1, word) || // Diagonal (down-right)
        checkDirection(i, j, 1, 1, reverseWord) || // Diagonal (up-left)
        checkDirection(i, j, 1, -1, word) || // Diagonal (down-left)
        checkDirection(i, j, 1, -1, reverseWord) // Diagonal (up-right)
      ) {
        return true;
      }
    }
  }
  return false;
}

// Example 5x5 grid
const grid: Grid = [
  ['C', 'A', 'T', 'F', 'G'],
  ['X', 'C', 'A', 'T', 'Y'],
  ['B', 'R', 'A', 'T', 'E'],
  ['M', 'C', 'A', 'T', 'L'],
  ['Q', 'W', 'E', 'R', 'T'],
];

// Word to search
const word = 'CAT';
