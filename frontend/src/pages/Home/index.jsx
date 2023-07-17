import useBooks from "../../hooks/useBooks";
import Sidebar from "../../components/Sidebar";
import {
  HighlightWrapper,
  BookWrapper,
  ContentWrapper,
  SectionWrapper,
} from "./Styled";
import MainHighlight from "../../components/Highlight";
import Newsletter from "../../components/Newsletter";
import Book from "../../components/Book";

export default function Home() {
  const { data, loading } = useBooks({
    filter: {
      isBestSeller: true,
    },
  });

  return (
    <SectionWrapper>
      <Sidebar />
      <ContentWrapper>
        <HighlightWrapper>
          <MainHighlight />
          <Newsletter />
        </HighlightWrapper>
        <BookWrapper>
          <h3 id="bestselling-title">Bestselling books</h3>
          <div className="books">
          {loading && <p>Loading...</p>}
          {data &&
            data.books.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                price={book.price}
              />
            ))}
          </div>
        </BookWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
}
