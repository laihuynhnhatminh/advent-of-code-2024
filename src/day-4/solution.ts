import { DATA } from './data';

const dataRows = DATA.split('\n').filter(Boolean);
const rows = dataRows.length; // Number of rows
const cols = dataRows[0].length; // Number of columns
const arr = dataRows.join('').split('');

function isXMAS(a: string, b: string, c: string, d: string): boolean {
  return `${a}${b}${c}${d}` === 'XMAS' || `${a}${b}${c}${d}` === 'SAMX';
}

/**
 * a   b
 *   c
 * d   e
 */
function isXMASWithoutX(
  a: string,
  b: string,
  c: string,
  d: string,
  e: string,
): boolean {
  if (c !== 'A') return false;
  if (a === 'A' || b === 'A' || d === 'A' || e === 'A') return false;
  
  return (
    (`${a}${c}${e}` === 'MAS' || `${a}${c}${e}` === 'SAM') &&
    (`${b}${c}${d}` === 'MAS' || `${b}${c}${d}` === 'SAM')
  );
}

/**
 * [ j ------>
 *   A, B, C, D, 1, A
 * i E, F, G, H, 2, B
 * | I, J, K, L, 4, C
 * | L, M, N, O, 5, D
 *   6, 7, 8, 9, 0, $
 *   1, 2, 4, 5, 6, 7
 * ]
 *
 * @comment
 * Not sure if this is a proper way to handle this. Looks more like a brute force method :)
 * To be fair I used other solution from other people online to test if my calculation was correct or not.
 * When I look at it is a O(n^2) loop so it is quite slow -> a full run loop inside another full run loop.
 *
 * TODO: Maybe improve this with a solution when learning an algorithm for this?
 */
export function solutionPart1() {
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Vertical: A -> E -> I -> L
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
      if (j <= cols - 4) {
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
      if (j >= 3) {
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

/**
 * M S
 *  A
 * M S
 *
 * @comment
 * Brute force again with double loop over loop
 * Get cols and rows length then iterate over them and with in rows loop, we also iterate over cols.
 *
 * i represent current row we are at.
 * j represent current col we are at.
 *
 * So arr[i * cols + j] indicate where our current pointer is pointing to during the iteration
 *
 * TODO: Maybe improve this with a solution when learning an algorithm for this?
 */
export function solutionPart2() {
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j <= cols - 3) {
        if (
          isXMASWithoutX(
            arr[i * cols + j],
            arr[i * cols + j + 2],
            arr[(i + 1) * cols + j + 1],
            arr[(i + 2) * cols + j],
            arr[(i + 2) * cols + j + 2],
          )
        ) {
          count++;
        }
      }
    }
  }

  return count;
}
