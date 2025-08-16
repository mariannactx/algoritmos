//Dado um array de números inteiros chamado nums e um inteiro target, retorne os índices de dois números de forma que
//sua soma seja igual a target.
//Você pode assumir que cada entrada terá exatamente uma solução, e não poderá usar o mesmo elemento duas vezes.
//Você pode retornar a resposta em qualquer ordem.
//              \/
// array = [2,5,1,7,6]  target = 3
//
// hash = [ {K:2,V:0}, {K:5,V1}]
// 2,0
// return [0,2]

function findIndexes(nums: number[], target: number): number[] {
  if (nums.length == 2) {
    return [0, 1];
  }

  let indexes: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    const pivot = nums[i]; // pivot = 2
    const complement = target - pivot; // complement = 1

    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[j] == complement) {
        indexes = [i, j];
        break;
      }
    }

    if (indexes.length === 2) {
      break;
    }
  }

  if (indexes.length == 1) return [];

  return indexes;
}

// array = [3,2,4]  target = 6

function findIndexes2(nums: number[], target: number): number[] {
  if (nums.length == 2) {
    return [0, 1];
  }

  const hash: Record<number, number> = {};

  let indexes: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (hash[complement] !== undefined) {
      indexes = [i, hash[complement]];
      break;
    } else {
      hash[num] = i;
    }
  }

  return indexes;
}

console.log(findIndexes([2, 5, 1, 7, 6], 3));
console.log(findIndexes2([2, 5, 1, 7, 6], 3));
