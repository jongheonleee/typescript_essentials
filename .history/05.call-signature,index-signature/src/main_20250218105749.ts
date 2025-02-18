// 재사용을 도모하기 위해 인터페이스 정의 
interface getLikeNumber {
    // 호출 시그니처 : 입력타입 -> 출력타입 
    (like: number) : number;
}

// 자바와 다른 점은 iv 또한 인터페이스에 정의됨 
interface Post {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber // 호출 시그니처 정의하여 재사용 도모 
}

const post1 :Post = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number) {
        return like;
    }
}

post1.getLikeNumber(1);

// 인덱스 시그니처 

interface Post2 {
    id: number;
    title: string;
}

const post2: Post2 = {
    id: 1,
    title: 'post 2',

}
