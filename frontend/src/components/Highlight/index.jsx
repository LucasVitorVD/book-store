import { MainHighLightWrapper } from "./Styled";
import bookIcon from "../../assets/book-icon.png";
import leafIcon from "../../assets/leaf-icon.png";
import notebookIcon from "../../assets/notebook-icon.png";
import fantasyBook from "../../assets/fantasy-book-icon.png"
import greenRetangle from "../../assets/retangle.svg";
import blueRetangle from "../../assets/blue-retangle.svg";

export default function MainHighlight() {
  return (
    <MainHighLightWrapper>
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
    </MainHighLightWrapper>
  );
}
