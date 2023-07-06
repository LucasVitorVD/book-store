import SidebarContainer from "./Styled"
import sidebarLogo from "../../assets/sidebar-image.png"

export default function Sidebar() {
  return (
    <SidebarContainer>
      <h2>Books by language</h2>
      <figure>
        <img src={sidebarLogo} alt="sidebar icon" />
      </figure>
      <a href="#">Books in Spanish</a>
      <a href="#">Books in French</a>
      <a href="#">Books in German</a>
      <a href="#">Books in Russian</a>
      <a href="#">More</a>
    </SidebarContainer>
  )
}