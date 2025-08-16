export function quicksort(numbers: number[]): number[] {
    if (numbers.length <= 1) return numbers;

    const max = numbers.length - 1;
    const min = 0;

    const pivotIndex = Math.floor(Math.random() * (max - min + 1) + min);
    const pivot = numbers[pivotIndex];
    const smaller = [];
    const greater = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < pivot) {
            smaller.push(numbers[i]);
        }

        if (numbers[i] > pivot) {
            greater.push(numbers[i]);
        }
    }

    return [...quicksort(smaller), pivot, ...quicksort(greater)];
}
