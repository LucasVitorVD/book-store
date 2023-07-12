import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../Book";
import useBooks from "../../hooks/useBooks";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
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
          <Book 
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            price={book.price}
          />
        ))
      )}
    </Carousel>
  );
}
