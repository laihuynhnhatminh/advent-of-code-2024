import { runSolutionWithPerformanceForLoops } from '../utils';
import { improvedSolution1, improvedSolution2 } from './improve-solution';
import { solutionPart1, solutionPart2 } from './solution';

// Solution for part 1
runSolutionWithPerformanceForLoops(solutionPart1, 20, 5);
runSolutionWithPerformanceForLoops(improvedSolution1, 20, 5);

// Solution for part 2
runSolutionWithPerformanceForLoops(solutionPart2, 20, 5);
runSolutionWithPerformanceForLoops(improvedSolution2, 20, 5);
