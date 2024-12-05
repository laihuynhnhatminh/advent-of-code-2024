import { DATA } from './data';

export function splitMatrix(): number[][] {
  return DATA.trim()
    .split(/\n/)
    .map((line) => line.split(/\s+/).filter(Boolean).map(Number));
}
