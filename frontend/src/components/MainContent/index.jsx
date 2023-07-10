import { MainContainer, HighlightSection, NewsletterContainer, BookSection } from "./Styled";
import bookIcon from "../../assets/book-icon.png";
import leafIcon from "../../assets/leaf-icon.png";
import notebookIcon from "../../assets/notebook-icon.png";
import fantasyBook from "../../assets/fantasy-book-icon.png"
import greenRetangle from "../../assets/retangle.svg";
import blueRetangle from "../../assets/blue-retangle.svg";
import letterIcon from "../../assets/letter-icon.png";
import Button from "../Elements/Button";
import BookCarousel from "../BookCarousel";

export default function Main() {
  return (
    <MainContainer>
      <HighlightSection>
        <div className="main_highlight">
          <div className="first_highlight_container">
            <img src={bookIcon} alt="icon" />
            <div>
              <img src={greenRetangle} alt="" className="retangle" />
              <h1>news and</h1>
            </div>
            <img src={leafIcon} alt="icon" />
            <img src={notebookIcon} alt="icon" />
          </div>
          <div className="second_highlight_container">
            <p>#BookSpace</p>
            <img src={fantasyBook} alt="icon" />
            <div>
              <img src={blueRetangle} alt="retangle" />
              <h1>trending</h1>
            </div>
          </div>
        </div>
        <NewsletterContainer>
          <div className="info">
            <img src={letterIcon} alt="letter icon" />
            <p>Learn about new offers by joining our newsletter</p>
          </div>

          <div className="input-area">
            <input type="text" />
            <Button text="Sign up" />
          </div>
        </NewsletterContainer>
      </HighlightSection>

      <h3 id="bestselling-title">Bestselling books</h3>

      <BookSection>
        <BookCarousel />
      </BookSection>
    </MainContainer>
  )
}
