import { useState } from 'react'
import './App.css'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import About from './Pages/About'
import Home from './Pages/Home'

function App() {
  return (  
    <BrowserRouter>
      <Navigation />
      <main>
        <Route path ="/" element={<Home/>} />
        <Route path ="Contact" element={<Contact/>} />
        <Route path ="Service" element={<Service/>} />
        <Route path ="About" element={<About/>} />
        <Route path="myContext" element={<MyState />} />

      </main>

    <h5>This is Footer</h5>

    </BrowserRouter>
  )
}

export default App
