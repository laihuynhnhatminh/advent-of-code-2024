import { splitMatrix } from './utils';

const MIN_DIFF = 1;
const MAX_DIFF = 3;

function isSafeReportsWithTolerate(
  arr: number[],
  isTolerate: boolean = false,
): boolean {
  let isSafe = true;
  let isDecreasing = arr[0] > arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (isDecreasing && arr[i] < arr[i + 1]) ||
      (!isDecreasing && arr[i] > arr[i + 1])
    ) {
      if (isTolerate) {
        isTolerate = false;
        arr.splice(i, 1);
        isDecreasing = arr[0] > arr[i];
        i--;
        continue;
      }

      isSafe = false;
      break;
    }

    const diff = Math.abs(arr[i] - arr[i + 1]);

    if (diff < MIN_DIFF || diff > MAX_DIFF) {
      if (isTolerate) {
        isTolerate = false;
        arr.splice(i, 1);
        i--;
        continue;
      }

      isSafe = false;
    }
  }

  return isSafe;
}

export function solutionPart1(): number {
  const matrix: number[][] = splitMatrix();
  let numberOfSafeReport = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (isSafeReportsWithTolerate(matrix[i])) {
      numberOfSafeReport += 1;
    }
  }

  return numberOfSafeReport;
}

export function solutionPart2(): number {
  const matrix: number[][] = splitMatrix();
  let numberOfSafeReport = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (isSafeReportsWithTolerate(matrix[i], true)) {
      numberOfSafeReport += 1;
    }
  }

  return numberOfSafeReport;
}
