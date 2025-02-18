interface getLikeNumber {
    
}

interface Post {
    id: number;
    title: string;
    getLikeNumber: (like:number) => number;
}

const post1 = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number) {
        return like
    }
}
