// 배열의 원소 타입이 변경될 때 마다 유니온 타입으로 해당 배열 타입을 추가해야함
// 이 부분을 추상화 시켜야함 -> 제네릭스 활용 
function getArrayLength(arr: number[] | string[] | boolean[]): number {
    return arr.length;
}


// 제네릭스를 활용한 메서드, 추상화 시킴 
function getArrayLengthWithGenerics<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false, true];

getArrayLength(arr1);
getArrayLength(arr2);
getArrayLength(arr3);


getArrayLengthWithGenerics<number>(arr1);
getArrayLengthWithGenerics<string>(arr2);
getArrayLengthWithGenerics<boolean>(arr3);

interface Vehicle {
    name: string;
    color: string;
    option: any;
}

const car = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike = {

}

