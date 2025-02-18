class Post { 
    // 생성자 정의
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getPost() {
        return `postId ${this.id}, postTitle ${this.title}`;
    }
}