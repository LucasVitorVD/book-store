import Button from "../Elements/Button";
import { BookWrapper } from "./Styled";

export default function Book({ id, title, author, price, image }) {
  return (
    <BookWrapper>
      <h4>{title}</h4>
      <span>{author}</span>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <span>USD${price}</span>
      <Button text="Order" />
    </BookWrapper>
  );
}
