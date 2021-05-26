import gql from 'graphql-tag';

export const giveQueryFeedback =
    gql`
mutation giveQueryFeedback($queryFeedBack: QueryFeedBackDto!) {

    giveQueryFeedback(queryFeedBack: $queryFeedBack)
}
`