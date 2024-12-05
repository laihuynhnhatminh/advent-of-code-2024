import { DATA } from './data';

export function solutionPart1(): number {
  const lines = DATA.trim().split(/\s+/).filter(Boolean).map(Number);
  const COLUMN_1: number[] = [];
  const COLUMN_2: number[] = [];

  for (let i = 0; i < lines.length; i += 2) {
    COLUMN_1.push(lines[i]);
    COLUMN_2.push(lines[i + 1]);
  }

  const column1 = new Int32Array(COLUMN_1);
  const column2 = new Int32Array(COLUMN_2);

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
  const lines = DATA.trim().split(/\s+/).filter(Boolean).map(Number);
  const COLUMN_1: number[] = [];
  const COLUMN_2: Map<number, number> = new Map();

  for (let i = 0; i < lines.length; i += 2) {
    COLUMN_1.push(lines[i]);

    if (!COLUMN_2.get(lines[i + 1])) COLUMN_2.set(lines[i + 1], 1);
    else COLUMN_2.set(lines[i + 1], COLUMN_2.get(lines[i + 1])! + 1);
  }

  const column1 = new Int32Array(COLUMN_1);

  let sum = 0;

  for (let index = 0; index < column1.length; index++) {
    sum += column1[index] * (COLUMN_2.get(column1[index]) || 0);
  }

  return sum;
}

