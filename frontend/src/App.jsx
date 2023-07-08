import Container from "./components/Container/Container.style.jsx"
import Header from "./components/Header/index.jsx"
import Main from "./components/MainContent/index.jsx"
import Sidebar from "./components/Sidebar/index.jsx"

export default function App() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Main />
    </Container>
  )
}