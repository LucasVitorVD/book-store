import Container from "./components/Container/Container.style.jsx"
import Header from "./components/Header/index.jsx"
import Sidebar from "./components/Sidebar/index.jsx"

export default function App() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <main style={{ background: 'red', flex: 1, marginLeft: 270 }}>
        <h1>Main</h1>
      </main>
    </Container>
  )
}