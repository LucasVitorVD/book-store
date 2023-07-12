import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from "./components/Container/Container.style.jsx"
import Home from "./pages/Home/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header/index.jsx"
import Search from "./pages/Search/index.jsx"

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      
    </Container>
  )
}