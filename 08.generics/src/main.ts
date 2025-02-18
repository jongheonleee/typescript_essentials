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

interface Vehicle<T> {
    name: string;
    color: string;
    option: T; // 이 부분 제네릭스를 활용하여 추상화 시키기 
}

// 제네릭스를 활용하여 재사용성이 높은 함수와 클래스를 생성함
// 즉, 변경되는 부분을 추상화하여 처리하기 때문에 좀 더 유연함
// any 처럼 타입을 직접 지정하지 않지만, 타입을 체크해 컴파일러가 오류를 찾을 수 있음
const car: Vehicle<{ price: number}> = {
    name: 'Car',
    color: 'red',

    option: {
        price: 1000
    }
}

const bike: Vehicle<boolean> = {
    name : 'Bike',
    color: 'green',

    option: true

}

// 제네릭스를 다양한 상황에서 사용해보기 
const makeArr = <T, U>(x : T, y: U) : [T, U] => {
    return [x, y];
}

const arr4 = makeArr<number, number>(4, 5);
const arr5 = makeArr<string, string>('a', 'b');

const makeArr1 = <T, U = string>(x : T, y: U) : [T, U] => {
    return [x, y];
}

const arr6 = makeArr1<string>('a', 'b');

// 제네릭스를 상속과 함께 사용하기 
const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

makeFullName({ firstName: 'john', lastName: 'Doe', location: 'Seoul'});