import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Find Jobs ?</h1>
        <Link to='/'>Home</Link>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
