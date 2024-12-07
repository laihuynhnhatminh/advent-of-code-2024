import fs from 'fs';
import path from 'path';
const input = fs
  .readFileSync(path.resolve('./src/day-3/data.txt'), 'utf8')
  .trim();

function mul(a: number, b: number): number {
  return a * b;
}

export function solutionPart1() {
  const newRegex = /mul\(\d+,\d+\)/g;
  const mulRegex = /mul\((\d+),(\d+)\)/g;

  return input
    .match(newRegex)!
    .toString()
    .replace(mulRegex, '$1,$2')
    .split(',')
    .reduce((acc: number, val, index, arr) => {
      if (index % 2 === 1) return acc;

      acc += mul(Number(arr[index]), Number(arr[index + 1]));
      return acc;
    }, 0);
}

export function solutionPart2() {
  const newRegex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  let isSkipping = false;

  return input
    .match(newRegex)!
    .toString()
    .replace(mulRegex, '$1,$2')
    .split(',')
    .map((v) => {
      if (v === "don't()") {
        isSkipping = true;
      } else if (v === 'do()') {
        isSkipping = false;
      }

      if (isSkipping) {
        return NaN;
      }

      return Number(v);
    })
    .filter((v) => !Number.isNaN(v))
    .reduce((acc: number, _val, index, arr) => {
      if (index % 2 === 1) return acc;

      acc += mul(arr[index], arr[index + 1]);
      return acc;
    }, 0);
}
