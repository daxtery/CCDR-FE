import gql from 'graphql-tag';

export const lastNQueries =
  gql`
query 
lastNQueries($n: Int!) {
  lastNUniqueQueries(n: $n)
}
`