function getArrayLength(arr: number[] | string[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false, true];

getArrayLength(arr1);
getArrayLength(arr2);
getArrayLength(arr3);