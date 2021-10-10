export interface comment {
    id: number;
    authorId: number;
    videoId: number;
    content: string;
    likes: number;
    totalResponse: number;
    created: Date;
}

export interface responseComment {
    id: number;
    authorId: number;
    commentId: number;
    content: string;
    likes: number;
    created: Date;
}
