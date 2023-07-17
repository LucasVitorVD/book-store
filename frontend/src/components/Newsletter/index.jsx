import { NewsletterWrapper } from "./Styled";
import Button from "../../components/Elements/Button";
import letterIcon from "../../assets/letter-icon.png";

export default function Newsletter() {
  return (
    <NewsletterWrapper>
      <div className="info">
        <img src={letterIcon} alt="letter icon" />
        <p>Learn about new offers by joining our newsletter</p>
      </div>
      <div className="input-area">
        <input type="text" />
        <Button text="Sign up" />
      </div>
    </NewsletterWrapper>
  );
}
