interface IUser {
    name: string;
    age: number;
    address: string;
}

type UserKeys = keyof IUser;
// 'name' | 'age' | 'address'

const user = {
    name: 'john',
    age: 20,
    address: 'seoul'
}

type UserKeys2 = keyof typeof user
// type UserKeys2 = "name" | "age" | "address"