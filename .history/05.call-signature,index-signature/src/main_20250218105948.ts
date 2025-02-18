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
    // 인덱스 시그니처 사용 
    // 키값이 string이라는 것은 알고 있음 
    [key:string]: unknown; // 아직 어떤 타입이 올지 모르기 때문에 unknown으로 처리 
    
    id: number;
    title: string;
}

const post2: Post2 = {
    id: 1,
    title: 'post 2',

}

// 추후에 추가될 만한 속성들 
post2['description'] = 'description 2';
post2['pages'] = 300;
