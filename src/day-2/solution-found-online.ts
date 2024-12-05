/**
 * This file is to contain solution that I found or get from other to test and learn from.
 * Please ignore if you don't need this.
 */

import { DATA } from './data';

/**
 * From @nartc
 * @link https://github.com/nartc/aoc2024/blob/main/day-2/a.ts
 */
export function narctDay2Part1Solution() {
  const data = DATA.trim().split(/\n/);
  const reports = data.map((line) => line.split(' ').map(Number));
  return reports.filter(isValidLevel).length;
}

/**
 * From @nartc
 * @link https://github.com/nartc/aoc2024/blob/main/day-2/b.ts
 */
export function narctDay2Part2Solution() {
  const data = DATA.trim().split(/\n/);
  const reports = data.map((line) => line.split(' ').map(Number));
  let safeCount = reports.length;

  for (const levels of reports) {
    const violatingIndices = processLevels(levels);
    if (violatingIndices.length === 0) continue;

    let stillViolating = true;
    for (const violatingIndex of violatingIndices) {
      const isViolated = processLevels(levels, violatingIndex).length > 0;
      if (!isViolated) {
        stillViolating = false;
        // as soon as we find a non violating level, we can consider this as safe
        break;
      }
    }

    if (stillViolating) safeCount -= 1;
  }

  return safeCount;
}

/**
 * HELPERS
 */

function isValidLevel(levels: number[]): boolean {
  let state!: 'increasing' | 'decreasing';

  for (let i = 0; i < levels.length - 1; i++) {
    const current = levels[i];
    const next = levels[i + 1];

    // Early returns for invalid cases
    if (current === next || Math.abs(current - next) > 3) {
      return false;
    }

    if (!state) {
      state = current > next ? 'decreasing' : 'increasing';
      continue;
    }

    if (
      (state === 'decreasing' && current < next) ||
      (state === 'increasing' && current > next)
    ) {
      return false;
    }
  }

  return true;
}

function processLevels(levels: number[], skipIndex?: number) {
  const violatingIndices: number[] = [];
  let state!: 'increasing' | 'decreasing';

  for (let i = 0; i < levels.length; i++) {
    if (i === skipIndex) continue;
    const nextIndex = i + 1 === skipIndex ? i + 2 : i + 1;
    if (nextIndex >= levels.length) break;

    const current = levels[i];
    const next = levels[nextIndex];

    // if 2 levels are the same, we're not safe
    if (current === next) {
      violatingIndices.push(i);
      break;
    }

    // difference between current and next level is more than 3
    if (Math.abs(current - next) > 3) {
      violatingIndices.push(i, nextIndex);
      break;
    }

    // if we don't have the state, we calculate it then skip to the next iteration
    if (!state) {
      state = current > next ? 'decreasing' : 'increasing';
      continue;
    }

    if (
      (state === 'increasing' && current > next) ||
      (state === 'decreasing' && current < next)
    ) {
      violatingIndices.push(i, nextIndex);
      const prevIndex = i - 1;
      if (prevIndex >= 0 && prevIndex !== skipIndex)
        violatingIndices.push(prevIndex);
      break;
    }
  }

  return violatingIndices;
}
