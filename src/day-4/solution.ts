import { DATA } from './data';

/**
 * [
 *   A, B, C, D, 1, A
 *   E, F, G, H, 2, B
 *   I, J, K, L, 4, C
 *   L, M, N, O, 5, D
 *   6, 7, 8, 9, 0, $
 *   1, 2, 4, 5, 6, 7
 * ]
 */
export function solutionPart1() {
  const dataRows = DATA.split('\n').filter(Boolean);
  const rows = dataRows.length; // Number of rows
  const cols = dataRows[0].length; // Number of columns
  const arr = dataRows.join('').split('');
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Vertical: A -> E -> I -> L
      if (i <= rows - 4) {
        if (
          isXMAS(
            arr[i * cols + j],
            arr[(i + 1) * cols + j],
            arr[(i + 2) * cols + j],
            arr[(i + 3) * cols + j],
          )
        ) {
          count++;
        }
      }

      // Horizontal: A -> B -> C -> D
      if (j <= cols - 4) {
        if (
          isXMAS(
            arr[i * cols + j],
            arr[i * cols + j + 1],
            arr[i * cols + j + 2],
            arr[i * cols + j + 3],
          )
        ) {
          count++;
        }
      }

      // Diagonal Down-Right: A -> F -> K -> O
      if (i <= rows - 4 && j <= cols - 4) {
        if (
          isXMAS(
            arr[i * cols + j],
            arr[(i + 1) * cols + j + 1],
            arr[(i + 2) * cols + j + 2],
            arr[(i + 3) * cols + j + 3],
          )
        ) {
          count++;
        }
      }

      // Diagonal Down-Left: D -> G -> J -> L
      if (i <= rows - 4 && j >= 3) {
        if (
          isXMAS(
            arr[i * cols + j],
            arr[(i + 1) * cols + j - 1],
            arr[(i + 2) * cols + j - 2],
            arr[(i + 3) * cols + j - 3],
          )
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

function isXMAS(a: string, b: string, c: string, d: string): boolean {
  return `${a}${b}${c}${d}` === 'XMAS' || `${a}${b}${c}${d}` === 'SAMX';
}
