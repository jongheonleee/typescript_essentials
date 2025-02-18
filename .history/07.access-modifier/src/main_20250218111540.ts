class Post { 
    // 속성 정의 
    id: number;
    title: string;

    // 생성자 정의
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getPost() {
        return `postId ${this.id}, postTitle ${this.title}`;
    }
}

const post = new Post(1, 'title 1');