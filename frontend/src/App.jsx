import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Container from "./components/Container/Container.style.jsx"
import Home from "./pages/Home/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header/index.jsx"
import Search from "./pages/Search/index.jsx"

const MainWrapper = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 1rem;
`

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </BrowserRouter>
      
    </Container>
  )
}