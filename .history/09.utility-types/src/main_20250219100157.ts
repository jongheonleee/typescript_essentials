// Partial 

interface Address {
    email: string;
    address: string;
}

// Partial를 사용하면 특정 타입의 부분집합을 만조가는 타입을 정의할 수 있음
// 공집합도 가능함 
const me: Partial<Address> = {}
const you: Partial<Address>= { email: 'abc123@gmail.com'};
const all: Address = { email: 'abcd123@gmail.com', address: 'john'}


// Pick
// 특정 타입에서 몇 개의 속성을 선택(pick)해가지고 새로운 타입으로 정의할 수 있음
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: Partial<Todo> = {
    title: 'Clean Room',
    completed: false
}


// Omit 생략하다
// 특정 타입에서 특정 속성만 제거해가지고 새로운 타입으로 정의할 수 있음 
// Omit <-> Pick
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview2 = Omit<Todo, 'description'>;


const todo2 = {
    title: 'clean room',
    completed: false,
    createdAt: 12341234
}

// Exclude
// 일반 Union 유형을 전달한 다음 두 번째 인수에서 제거할 멤버를 지정함
type myUnionType = '🍓'|'🍎'|'🍇'|'🍋';

let lemon: myUnionType = '🍋';
let noLemonsPlease: Exclude<myUnionType, '🍋'> = '🍇';
let noApplesOrLemons: Exclude<myUnionType, '🍋'|'🍎'> = '🍇';


// Required
// 원래 유형이 일부 속성을 선택 사항으로 정의한 경우에도 객체에 Required 속성이 있는지 확인해야 하는 경우가 있음
