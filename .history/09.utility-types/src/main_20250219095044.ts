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

