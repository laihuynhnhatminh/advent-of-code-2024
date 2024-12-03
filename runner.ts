import path from "path";

const input = process.argv[2];

if (!input) {
  console.log('Please provide a day folder name');
  process.exit(1);
}

try {
  const solutionPath = path.resolve(__dirname, `./src/${input}/main`);
  const solution = require(solutionPath);
  if (typeof solution === 'function') solution();
} catch (e) {
  console.error(e);
  process.exit(1);
}
