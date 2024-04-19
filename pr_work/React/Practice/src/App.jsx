import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Service from './Pages/Service'


function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <main>
      <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="Contact" element={<Contact/>} />
      <Route path ="Service" element={<Service/>} />
      <Route path ="About" element={<About/>} />
      </Routes>
      </main>

      <h5>This is Footer</h5>
    </BrowserRouter>
  )
}

export default App

function Navigation() {
  return(
    <nav>
      <div>
        <h2>Logo</h2>
      </div>

      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"Service"}>Service</NavLink></li>
        <li><NavLink to={"About"}>About</NavLink></li>
        <li><NavLink to={"Contact"}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}