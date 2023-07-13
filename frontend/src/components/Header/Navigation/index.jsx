import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { NavWrapper } from "./Styled";

export default function Navigation() {
  return (
    <NavWrapper>
      <div>
        <Link to={"/"}>
          <LiaHomeSolid size={30} />
        </Link>
        <Link to={"#"}>Contact</Link>
        <Link to={"#"}>Help</Link>
      </div>

      <div>
        <Link to={"#"}>Wishlist</Link>
        <Link to={"#"}>My orders</Link>
        <Link to={"#"}>Sign in/ Sign up</Link>
      </div>
    </NavWrapper>
  );
}
