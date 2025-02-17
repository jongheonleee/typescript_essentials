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

type Bear2 = Animal & {
    honey: boolean;
}

const bear2 = {
    name : 'honey bear',
    honey: true
}