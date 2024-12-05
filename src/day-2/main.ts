import { runSolutionWithPerformanceForLoops } from '../utils';
import { solutionPart1, solutionPart2 } from './solution';
import {
  narctDay2Part1Solution,
  narctDay2Part2Solution,
} from './solution-found-online';

// Solution for part 1
runSolutionWithPerformanceForLoops(solutionPart1, 20, 5);
runSolutionWithPerformanceForLoops(narctDay2Part1Solution, 20, 5);

// Solution for part 2
runSolutionWithPerformanceForLoops(solutionPart2, 20, 5);
runSolutionWithPerformanceForLoops(narctDay2Part2Solution, 20, 5);
