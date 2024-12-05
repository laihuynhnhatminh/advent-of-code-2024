import { DATA } from './data';

export function splitMatrix() {
  return DATA.trim()
    .split(/\n/)
    .map((line) => line.split(/\s+/).filter(Boolean).map(Number));
}
