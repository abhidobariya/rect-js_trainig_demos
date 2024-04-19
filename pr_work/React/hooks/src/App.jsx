import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About, { Magan } from "./pages/About"
import Service from "./pages/Service"
import MyUseState from "./pages/MyUseState"

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Chagan" element={<Service />} />
          <Route path="Magan" element={<Magan />} />
          <Route path="useState" element={<MyUseState />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

const Navigation = () => {
  return (
    <nav>
      <div>Web Logo</div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'About'}>About</NavLink></li>
        <li><NavLink to={'Chagan'}>Service</NavLink></li>
        <li><NavLink to={'Magan'}>Magan</NavLink></li>
        <li><NavLink to={'useState'}>useState</NavLink></li>
      </ul>
    </nav>
  )
}