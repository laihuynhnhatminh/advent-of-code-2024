import { solutionPart1, solutionPart2 } from './solution';
import { runSolutionWithPerformanceForLoops } from '../utils';
import {
  narctDay1Part2Solution,
  solutionByChatGPT,
} from './solution-found-online';

// Solution for part 1
runSolutionWithPerformanceForLoops(solutionPart1, 20, 5);

// Solution for part 2
runSolutionWithPerformanceForLoops(solutionPart2, 20, 5);
runSolutionWithPerformanceForLoops(narctDay1Part2Solution, 20, 5);
runSolutionWithPerformanceForLoops(solutionByChatGPT, 20, 5);
