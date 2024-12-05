import { splitColumns } from './utils';

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

export function solutionPart2(): number {
  const { column1, column2 } = splitColumns();

  const column2Map: Map<number, number> = column2.reduce(
    (acc: Map<number, number>, val: number) => {
      const curVal = acc.get(val);

      if (curVal) {
        acc.set(val, curVal + 1);
      } else {
        acc.set(val, 1);
      }

      return acc;
    },
    new Map(),
  );

  let sum = 0;

  for (let index = 0; index < column1.length; index++) {
    sum += column1[index] * (column2Map.get(column1[index]) || 0);
  }

  return sum;
}
