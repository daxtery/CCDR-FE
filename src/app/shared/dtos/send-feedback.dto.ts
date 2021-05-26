export class FeedBack {

    _id: String;
    clicked: Boolean;
}


export class QueryFeedBackDto {

    query: String;

    feedBacks: Array<FeedBack>;
}