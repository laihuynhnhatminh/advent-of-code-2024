import { DATA, RULE } from './data';

const rulesArr = RULE.split('\n').map((s) => s.split('|'));
const dataArr = DATA.split('\n').map((s) => s.split(','));

export function solutionPart1() {
  const orderingMap = new Map<string, string[]>();
  let sum = 0;

  rulesArr.forEach((sArr) => {
    const arr: string[] = orderingMap.get(sArr[0]) || [];

    if (arr.length === 0) {
      orderingMap.set(sArr[0], [sArr[1]]);
      return;
    }

    arr.push(sArr[1]);
    orderingMap.set(sArr[0], arr);
  });

  const checkIfPageOrderCorrect = (val: string, checkArr: string[]) => {
    const valOrder = orderingMap.get(val);

    if (!valOrder) return false;

    for (let i = 0; i < checkArr.length; i++) {
      if (!valOrder.includes(checkArr[i])) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < dataArr.length; i++) {
    let isCorrect = true;

    for (let j = 0; j < dataArr[i].length - 1; j++) {
      const checkArr = dataArr[i].slice(j + 1, dataArr[i].length);
      if (!checkIfPageOrderCorrect(dataArr[i][j], checkArr)) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      sum += Number(dataArr[i][Math.floor(dataArr[i].length / 2)]);
    }
  }

  return sum;
}

export function solutionPart2() {
  const newDataArr: string[][] = JSON.parse(JSON.stringify(dataArr));
  const orderingMap = new Map<string, string[]>();
  let sum = 0;

  rulesArr.forEach((sArr) => {
    const arr: string[] = orderingMap.get(sArr[0]) || [];

    if (arr.length === 0) {
      orderingMap.set(sArr[0], [sArr[1]]);
      return;
    }

    arr.push(sArr[1]);
    orderingMap.set(sArr[0], arr);
  });

  const checkIfPageOrderCorrect = (val: string, checkArr: string[]) => {
    const valOrder = orderingMap.get(val);

    if (!valOrder) return false;

    for (let i = 0; i < checkArr.length; i++) {
      if (!valOrder.includes(checkArr[i])) {
        return false;
      }
    }

    return true;
  };

  const updatePageOrder = (val: string, arr: string[], index: number) => {
    arr.splice(index, 1);
    arr.push(val);
  };

  for (let i = 0; i < newDataArr.length; i++) {
    let isErrorPageOrder = false;
    for (let j = 0; j < newDataArr[i].length - 1; j++) {
      const checkArr = newDataArr[i].slice(j + 1, newDataArr[i].length);
      if (!checkIfPageOrderCorrect(newDataArr[i][j], checkArr)) {
        isErrorPageOrder = true;
        updatePageOrder(newDataArr[i][j], newDataArr[i], j);
        j--;
      }
    }

    if (isErrorPageOrder) {
      sum += Number(newDataArr[i][Math.floor(newDataArr[i].length / 2)]);
    }
  }

  return sum;
}
