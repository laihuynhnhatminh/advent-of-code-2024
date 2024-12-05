/**
 * Run a solution with performance timer
 *
 * @export
 * @param {Function} fn
 */
export function runSolutionWithPerformance(fn: Function): void {
  console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[42m',
    `EXECUTING function ${fn.name}`,
    '\x1b[0m',
  );

  const startTimer = performance.now();

  const res = fn();

  const endTimer = performance.now();

  console.log('\x1b[0m', '\x1b[30m', '\x1b[42m', 'INFO', '\x1b[0m');
  console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[44m',
    `Solution ran for: ${endTimer - startTimer} miliseconds`,
    '\x1b[0m',
  );
  console.log('\x1b[0m', '\x1b[30m', '\x1b[44m', `Result: ${res}`, '\x1b[0m');
}

/**
 * Run a solution with performance for a number of loops
 * and warm up loops to get over the JIT compilation
 *
 * @export
 * @param {Function} fn
 * @param {number} loop
 * @param {number} [warmUpLoop]
 */
export function runSolutionWithPerformanceForLoops(
  fn: Function,
  loop: number,
  warmUpLoop?: number,
): void {
  let totalTime = 0;
  loop = loop + (warmUpLoop || 0);

  for (let i = 0; i < loop; i++) {
    if (warmUpLoop && i < warmUpLoop) {
      console.log(
        '\x1b[0m',
        '\x1b[30m',
        '\x1b[42m',
        `Warming up ${i}:`,
        '\x1b[0m',
      );
      const startTimer = performance.now();
      fn();
      const endTimer = performance.now();
      console.log(
        '\x1b[0m',
        '\x1b[30m',
        '\x1b[44m',
        `Solution ran for: ${endTimer - startTimer}`,
        '\x1b[0m',
      );
      continue;
    }

    console.log(
      '\x1b[0m',
      '\x1b[30m',
      '\x1b[42m',
      `EXECUTING function ${fn.name}`,
      '\x1b[0m',
    );

    const startTimer = performance.now();

    const res = fn();

    const endTimer = performance.now();

    console.log('\x1b[0m', '\x1b[30m', '\x1b[42m', 'INFO', '\x1b[0m');
    console.log(
      '\x1b[0m',
      '\x1b[30m',
      '\x1b[44m',
      `Solution ran for: ${endTimer - startTimer} miliseconds`,
      '\x1b[0m',
    );
    console.log('\x1b[0m', '\x1b[30m', '\x1b[44m', `Result: ${res}`, '\x1b[0m');

    totalTime += endTimer - startTimer;
  }

  console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[44m',
    `Average time: ${totalTime / loop} miliseconds`,
    '\x1b[0m',
  );
}
