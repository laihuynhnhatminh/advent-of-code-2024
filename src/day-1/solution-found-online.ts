/**
 * This file is to contain solution that I found or get from other to test and learn from.
 * Please ignore if you don't need this.
 */

import { DATA } from './data';

/**
 * From @nartc
 * @link https://github.com/nartc/aoc2024/blob/main/day-1/b.ts
 */
export function narctDay1Part2Solution() {
  const data = DATA.trim().split(/\n/);
  const leftList: number[] = [];
  const rightRecord: Record<number, number> = {};

  for (const pair of data) {
    const [left, right] = pair.split(/\s+/).map(Number);

    if (!rightRecord[right]) rightRecord[right] = 1;
    else rightRecord[right] += 1;

    leftList.push(left);
  }

  let sum = 0;

  for (const left of leftList) {
    sum += left * (rightRecord[left] || 0);
  }

  return sum;
}

export function solutionByChatGPT(): number {
  const lines = DATA.trim().split(/\s+/).filter(Boolean).map(Number);

  // Create a map to count occurrences of numbers in the right column
  const rightColumnFrequency = new Map<number, number>();

  // Populate the map with frequencies from the right column
  for (let i = 1; i < lines.length; i += 2) {
    const rightValue = lines[i];
    rightColumnFrequency.set(
      rightValue,
      (rightColumnFrequency.get(rightValue) || 0) + 1,
    );
  }

  // Calculate the sum of left column numbers times their frequency in the right column
  let sum = 0;
  for (let i = 0; i < lines.length; i += 2) {
    const leftValue = lines[i];
    const frequency = rightColumnFrequency.get(leftValue) || 0; // Default to 0 if not found
    sum += leftValue * frequency;
  }

  return sum;
}
