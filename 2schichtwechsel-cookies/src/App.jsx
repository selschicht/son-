
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Impressum from "./pages/Impressum"
import Datenschutz from "./pages/Datenschutz"
import CookiePopup from "./components/CookiePopup"

function App() {
  return (
    <Router>
      <CookiePopup />
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/">Startseite</Link> |{" "}
        <Link to="/impressum">Impressum</Link> |{" "}
        <Link to="/datenschutz">Datenschutz</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  )
}

export default App
