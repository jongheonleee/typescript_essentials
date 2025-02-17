interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true
}


type Animal2 = {
    name: string;
}

type Bear2 = Animal2 & {
    honey: boolean;
}

const bear2: Bear = {
    name : 'honey bear',
    honey: true
}


interface Animal3 {
    name: string;
}

interface Animal3 {
    honey : boolean;
}

// interface의 경우 선언 병합이 가능함 
const bear3 : Animal3 = {
    name : 'honey bear',
    honey: true
}