import { splitColumns } from './common';

export function solutionPart1(): number {
  const { column1, column2 } = splitColumns();
  column1.sort();
  column2.sort();
  let sum = 0;

  for (let i = 0; i < column1.length; i++) {
    const diff = Math.abs(column1[i] - column2[i]);
    sum += diff;
  }

  return sum;
}