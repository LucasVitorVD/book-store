import { useState } from "react";
import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavWrapper, ResponsiveMenuWrapper } from "./Styled";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

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

      <FiMenu size={30} onClick={() => setShowMenu(true)} id="menu_hamburguer_icon" />

      <ResponsiveMenuWrapper showMenu={showMenu} style={showMenu ? {display: "block"} : {display: "none"}}>
        <ul className="menu_items">
          <li>
            <Link to={"#"}>Contact</Link>
          </li>
          <li>
            <Link to={"#"}>Help</Link>
          </li>

          <li>
            <Link to={"#"}>Wishlist</Link>
          </li>

          <li>
            <Link to={"#"}>My orders</Link>
          </li>

          <li>
            <Link to={"#"}>Sign in/ Sign up</Link>
          </li>

          <li>
            <AiOutlineClose size={45} onClick={() => setShowMenu(false)} />
          </li>
        </ul>
      </ResponsiveMenuWrapper>
    </NavWrapper>
  );
}
