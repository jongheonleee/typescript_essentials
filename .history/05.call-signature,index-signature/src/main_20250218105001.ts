interface getLikeNumber {

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
