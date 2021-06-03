export class FeedBack {

    _id: string;
    clicked: boolean;
    score: number;
}


export class QueryFeedBackDto {

    query: string;

    feedBacks: Array<FeedBack>;
}