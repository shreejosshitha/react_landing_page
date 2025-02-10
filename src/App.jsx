import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavLinks from "./components/Navlinks/Navlinks"

function App() {
  

  return (
      <div>
       <NavLinks />
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
       </Routes>
      </div>
      
  )
}

export default App
