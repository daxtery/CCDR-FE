import gql from 'graphql-tag';

export const giveQueryFeedback =
    gql`
mutation giveQueryFeedback($queryFeedBack: QueryFeedBackDto!) {

    storeQueryFeedback(queryFeedBack: $queryFeedBack)
}
`