"use strict";
// 타입스크립트에서의 모든 타입 학습 
// boolean
let boolean;
let falseBoolean = false;
let bnumber;
let integer = 6;
let float = 1.2345;
let string;
let firstName = 'Lee';
// 한가지 타입만 가지는 배열 
let names1 = ['lee', 'joe'];
let names2 = ['lee', 'kim'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['lee', 1, 2];
let array2 = ['lee', 1, 2];
// 여러 타입을 단언 x -> any
let someArray = ['Lee', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// stringArray.push('C');
// numberArray[0] = 3;
// Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2]; // 지정된 개수가 달라서 컴파일 에러
// tuple1 = [1, 'a']; // 지정된 타입의 위치가 달라서 컴파일 에러 
let users;
users = [[1, 'lee'], [2, 'doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);
// any 
let any = 'abc';
any = 1;
any = [];
// unknown type
let unknown = false;
// let string1 : string = unknown;  
let string2 = unknown; // 타입 단언 활용 -> 개발자가 컴파일러에게 해당 타입이 맞음을 알려줌 
// object 타입 
let obj = {};
let arr = [];
// let nul: object = null; // 컴파일러 설정에서 strict : true로 설정했기 때문
let date = new Date();
// 타입을 아래와 같이 정밀하게 지정할 수 있음 
const obj1 = {
    id: 1,
    title: 'title1'
};
// union 타입 
let union;
union = 'hi';
union = 123;
// union = [];
// function 타입 
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// strictNullCheck이 false일 때 컴파일 에러가 나지 않음 
// null, undefined
// let number1 : number = undefined;
// let string9 : string = null; 
// let object : {a:10, b:false} = undefined;
// let array : any[] = null;
// let undefined1 : undefined = null;
// let null1 : null = undefined;
// let void1 : void = null;
// strictNullCheck 이 true여도 void 타입에는 undefined 할당이 가능함
let void2 = undefined;
// void 
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // 출력값 undefined
// never 
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
never.push(1);
