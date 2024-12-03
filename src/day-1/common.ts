import { DATA } from './data';

/**
 * This function work by splitting and parsing the string array into 2 number
 * 
 * NOTE: While `DATA.trim().split(/\s+/).filter(Boolean).map(Number)` is a good hack to turn a string into a number array.
 * Should not be use in normal programming.
 * 
 * @return {*}  {{ column1: number[]; column2: number[] }}
 */
export function splitColumns(): { column1: Int32Array; column2: Int32Array } {
  const lines = DATA.trim().split(/\s+/).filter(Boolean).map(Number);
  const COLUMN_1: number[] = [];
  const COLUMN_2: number[] = [];

  for (let i = 0; i < lines.length; i += 2) {
    COLUMN_1.push(lines[i]);
    COLUMN_2.push(lines[i + 1]);
  }

  return {
    column1: new Int32Array(COLUMN_1),
    column2: new Int32Array(COLUMN_2),
  };
}
