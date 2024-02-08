
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Policy from "./pages/Policy"
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
   </BrowserRouter>

  )
}

export default App
