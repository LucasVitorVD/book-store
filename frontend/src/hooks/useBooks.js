import { useQuery, gql } from "@apollo/client";

export default function useBooks(variables) {
  const GET_BEST_BOOKS = gql`
    query($filter: BookFiltersInput) {
      books(filter: $filter) {
        title
        author
        image
        price
      }
    }
  `

  const { error, data, loading } = useQuery(GET_BEST_BOOKS, {
    variables  
  })

  return { error, data, loading }
}