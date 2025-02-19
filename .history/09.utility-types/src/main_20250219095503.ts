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

const todo2 = {
    title: 'clean room',
    completed: false,
    createdAt: 12341234
}