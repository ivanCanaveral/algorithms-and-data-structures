function permute<T>(list: T[], pos1: number, pos2: number): T[]{
    // Objects and arrays are passed by reference in js
    [list[pos1], list[pos2]] = [list[pos2], list[pos1]];
    return list
};

function bubbleSort(listToSort: number[]): number[] {
    let sorted = listToSort.slice();
    if (sorted.length < 3) {
        return sorted;
    } else {
        for (let last: number = sorted.length - 1; last > 0; last--){
            for (let pos: number = 0; pos < last; pos++) {
                if (sorted[pos] > sorted[pos + 1]) {
                    sorted = permute(sorted, pos, pos + 1);
                }
            }
        }
    }
    return sorted
};

const listToSort: number[] = [5, 4, 3, 2, 1];
console.log(bubbleSort(listToSort));