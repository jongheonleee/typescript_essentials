// 오버로딩 
// 같은 이름이지만 전달받는 매개변수가 서로 다름 
function add(a:string, b:string) : string;
function add(a:number, b:number) : number;

function add(a:any, b:any) : any {
    return a+b;
}


add('hello', 'world');
add(1, 1);


function saySomething(word: string | string[]) : string {
    if (typeof word === 'string') {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(' ');
    }
}

saySomething(['hello', 'world']);