import { COLUMN_1, COLUMN_2 } from './data';

function getNumbersOfEntry(arr: Int32Array, searchValue: number): number {
    return arr.filter(val => val === searchValue).length;
}

export function solutionPart2Bad(): number {
    const col1 = new Int32Array(COLUMN_1);
    const col2 = new Int32Array(COLUMN_2);
    let sum = 0;

    for (let index = 0; index < col1.length; index++) {
        sum+= col1[index] * getNumbersOfEntry(col2, col1[index]);
    }

    return sum;
}

export function solutionPart2Good(): number {
    const col1 = new Int32Array(COLUMN_1);
    const col2 = new Int32Array(COLUMN_2);

    const col2Map: {[x: string]: number} = col2.reduce((acc: {[x: string]: number}, val: number) => {
        if (acc[val] !== undefined) {
            acc[val]++;
        } else {
            acc[val] = 1;
        }
        return acc;
    }, {})

    let sum = 0;

    for (let index = 0; index < col1.length; index++) {
        sum+= col1[index] * (col2Map[col1[index].toString()] || 0);
    }

    return sum;
}
