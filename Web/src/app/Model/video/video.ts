
export interface VIDEO {
    id: number;
    authorId: number;
    videoLink: string;
    img: string;
    name: string;
    description: string;
    views: number;
    likes: number;
    dislikes: number;
    created: Date;
}

export interface LinkWithVideo {
    description: string;
    links: LINK[];
}

export interface LINK {
    title: string;
    name: string;
}
