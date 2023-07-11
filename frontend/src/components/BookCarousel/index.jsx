import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Elements/Button";
import { Book } from "./Styled";
import useBooks from "../../hooks/useBooks";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BookCarousel() {
  const { data, loading } = useBooks({
    filter: {
      isBestSeller: true
    }
  })

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform .5s ease-in-out"
      transitionDuration={700}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {loading && (
        <p>Loading...</p>
      )}
      {data && (
        data.books.map((book) => (
          <Book key={book.id}>
            <h4>{book.title}</h4>
            <span>{book.author}</span>
            <figure>
              <img
                src={book.image}
                alt={book.title}
              />
            </figure>
            <span>USD${book.price}</span>
            <Button text="Order" />
          </Book>
        ))
      )}
    </Carousel>
  );
}
