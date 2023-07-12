import { useSearchParams } from "react-router-dom"
import { SearchWrapper, ResultSectionWrapper } from "./Styled"
import useBooks from "../../hooks/useBooks"
import Book from "../../components/Book"

export default function Search() {
  const [searchParams] = useSearchParams()

  const q = searchParams.get('q')

  const { data, loading } = useBooks()

  return (
    <SearchWrapper>
      <h1>Results about: &quot;{q}&quot;</h1>
      <ResultSectionWrapper>
      {loading && (
        <p>Loading...</p>
      )}
      {data ? (
        data.books.map((book) => (
          <Book 
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            price={book.price}
          />
        ))
      ) : (
        <p>No books matched with your search</p>
      )}
      </ResultSectionWrapper>
    </SearchWrapper>
  )
}