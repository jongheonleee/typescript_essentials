// Partial 

interface Address {
    email: string;
    address: string;
}

const me: Partial<Address> = {}
const you: Partial<Address>= { email: 'abc123@gmail.com'};
const all: Address = { email: 'abcd123@gmail.com', address: 'john'}