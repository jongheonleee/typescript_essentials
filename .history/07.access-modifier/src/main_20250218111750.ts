// 접근 제어자
// - public, protected, private

class Post { 
    // 속성 정의 
    public id: number = 0; // 초기값 설정 
    protected title: string = "";

    // 생성자 정의
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getPost() {
        return `postId ${this.id}, postTitle ${this.title}`;
    }
}

class PostB extends Post {
    getPost() {
        return this.title;
    }
}

const post = new Post(1, 'title 1');

console.log(post.id);
console.log(post.title);