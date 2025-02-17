const bodyElement = document.querySelector('body');
bodyElement!.innerText = 'Hello'; // ! 를 활용하면 컴파일러에게 null, undefined 가 아니라고 명시함 


// type guard 사용 
if (bodyElement) {
    bodyElement.innerText = 'Hello';
}

function func(arg: string | null) {
    return arg.toLowerCase();
}


func('hello');
func(null); 
