import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Elements/Button";
import { Book } from "./Styled";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function BookCarousel() {
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
      <Book>
        <h4>Book name</h4>
        <span>Author</span>
        <figure>
          <img src="https://images.csmonitor.com/csm/2014/07/chamber.png?alias=standard_900x600nc" alt="Book" />
        </figure>
        <span>Price</span>
        <Button text="Order" />
      </Book>
      <Book>
        <h4>Spider man</h4>
        <span>Author</span>
        <figure>
          <img src="https://images.csmonitor.com/csm/2014/07/chamber.png?alias=standard_900x600nc" alt="Book" />
        </figure>
        <span>Price</span>
        <Button text="Order" />
      </Book>
      <Book>
        <h4>Harry Potter</h4>
        <span>Author</span>
        <figure>
          <img src="https://images.csmonitor.com/csm/2014/07/chamber.png?alias=standard_900x600nc" alt="Book" />
        </figure>
        <span>Price</span>
        <Button text="Order" />
      </Book>

      <Book>
        <h4>Persona</h4>
        <span>Author</span>
        <figure>
          <img src="https://images.csmonitor.com/csm/2014/07/chamber.png?alias=standard_900x600nc" alt="Book" />
        </figure>
        <span>Price</span>
        <Button text="Order" />
      </Book>

      <Book>
        <h4>DBZ</h4>
        <span>Author</span>
        <figure>
          <img src="https://images.csmonitor.com/csm/2014/07/chamber.png?alias=standard_900x600nc" alt="Book" />
        </figure>
        <span>Price</span>
        <Button text="Order" />
      </Book>
    </Carousel>
  )
}