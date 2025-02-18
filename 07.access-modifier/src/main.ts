// 접근 제어자
// - public, protected, private

class Post { 
    // // 속성 정의 
    // public id: number = 0; // 초기값 설정 
    // protected title: string = "";

    // // 생성자 정의
    // constructor(id: number, title: string) {
    //     this.id = id;
    //     this.title = title;
    // }

    // 위에서 정의한 속성과 생성자를 아래와 같이 한번에 나타낼 수 있음
    constructor(
        private id : number,
        protected title : string,
    ) {}

    getPost() {
        return `postId ${this.id}, postTitle ${this.title}`;
    }
}

class PostB extends Post {
    getPost() {
        return this.title; // protected이므로 접근 가능 
    }
}

const post = new Post(1, 'title 1');

// console.log(post.id);
// console.log(post.title);