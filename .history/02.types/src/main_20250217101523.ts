let boolean : boolean
let falseBoolean : boolean = false;

let bnumber : number
let integer : number = 6
let float : number = 1.2345

let string : string
let firstName : string = 'Lee';

// 한가지 타입만 가지는 배열 
let names1 : string[] = ['lee', 'joe'];
let names2 : Array<String> = ['lee', 'kim'];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 : (string | number)[] = ['lee', 1, 2];
let array2 : Array<String | number> = ['lee', 1, 2];

// 여러 타입을 단언 x -> any
let someArray : any[] = ['Lee', 1, [], {}, false];

// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray : readonly string[] = ['A', 'B'];
let numberArray : ReadonlyArray<number> = [1, 2];

stringArray.push('C');
numberArray[0] = 3;

// Tuple
let tuple1 : [string, number];
tuple1 = ['a', 1];
tuple1 = ['a', 1, 2]; // 지정된 개수가 달라서 컴파일 에러
tuple1 = [1, 'a']; // 지정된 타입의 위치가 달라서 컴파일 에러 
