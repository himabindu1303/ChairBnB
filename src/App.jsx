import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Carousels from './Components/Section1/Carousels.jsx'
import Cities from './Components/Section2/Cities.jsx'
import Amenities from './Components/Section3/Amenities.jsx'
import Reviews from './Components/Section4/Reviews.jsx'
import About from './Pages/About.jsx'
import AndhraPradesh from './Pages/AP.jsx'
import Hyderabad from "./Pages/Hyd.jsx"
import Banglore from "./Pages/Bng.jsx"
import Chennai from "./Pages/Chennai.jsx"
import Mumbai from "./Pages/Mumbai.jsx"
import Gurugram from "./Pages/Gurugram.jsx"
import Pune from "./Pages/Pune.jsx"
import Delhi from "./Pages/Delhi.jsx"
import BookNow from './Components/BookNowPage/Booknow.jsx'

function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Carousels />
            <Cities />
            <Amenities />
            <Reviews />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/AndhraPradesh" element={<AndhraPradesh />} />
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/banglore" element={<Banglore />} />
        <Route path="/chennai" element={<Chennai />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/gurugram" element={<Gurugram />} />
        <Route path="/pune" element={<Pune />} />
        <Route path="/delhi" element={<Delhi />} />

        <Route path="/booking" element={<BookNow/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App
