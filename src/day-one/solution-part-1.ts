import { DATA, COLUMN_1, COLUMN_2 } from './data';

/**
 * This function work by splitting and parsing the string array into 2 number 
 * @return {*}  {{ column1: number[]; column2: number[] }}
 */
function splitColumns(): { column1: Int32Array; column2: Int32Array } {
  const lines = DATA.trim().split('\n');
  const COLUMN_1: number[] = [];
  const COLUMN_2: number[] = [];

  lines.forEach((line) => {
    const [column1, column2] = line.split('   ');
    COLUMN_1.push(parseInt(column1, 10));
    COLUMN_2.push(parseInt(column2, 10));
  });

  return {
    column1: new Int32Array(COLUMN_1).sort(),
    column2: new Int32Array(COLUMN_2).sort(),
  };
}

export function solutionPart1Ver1(): number {
  const { column1, column2 } = splitColumns();
  let sum = 0;

  for (let i = 0; i < column1.length; i++) {
    const diff = Math.abs(column1[i] - column2[i]);
    sum += diff;
  }

  return sum;
}

export function solutionPart1Ver2(): number {
  const column1 = new Int32Array(COLUMN_1).sort();
  const column2 = new Int32Array(COLUMN_2).sort();
  let sum = 0;
  
  for (let i = 0; i < column1.length; i++) {
    const diff = Math.abs(column1[i] - column2[i]);
    sum += diff;
  }

  return sum;
}
