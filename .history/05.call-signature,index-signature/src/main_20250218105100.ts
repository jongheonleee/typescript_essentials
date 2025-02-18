// 재사용을 도모하기 위해 인터페이스 정의 
interface getLikeNumber {
    // 호출 시그니처 : 입력타입 -> 출력타입 
    (like: number) : number;
}

interface Post {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber
}

const post1 :Post = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number) {
        return like;
    }
}

post1.getLikeNumber(1);
