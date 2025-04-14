import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Carousels from './Components/Section1/Carousels.jsx'
import Cities from './Components/Section2/Cities.jsx'
import Amenities from './Components/Section3/Amenities.jsx'
import Reviews from './Components/Section4/Reviews.jsx'

import About from './Pages/About.jsx'
import PrivacyTerms from './Pages/Privacy&Terms.jsx'

import AndhraPradesh from './Pages/AP.jsx'
import Hyderabad from "./Pages/Hyd.jsx"
import Banglore from "./Pages/Bng.jsx"
import Chennai from "./Pages/Chennai.jsx"
import Mumbai from "./Pages/Mumbai.jsx"
import Gurugram from "./Pages/Gurugram.jsx"
import Pune from "./Pages/Pune.jsx"
import Delhi from "./Pages/Delhi.jsx"

import BookNow from './Components/BookNowPage/Booknow.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/Login.jsx'
import Logout from './Pages/Logout.jsx'


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
        <Route path="/privacy&Terms" element={<PrivacyTerms/>}/>
        <Route path="/contactus" element={<ContactPage />} />

        <Route path="/locations/AndhraPradesh" element={<AndhraPradesh />} />
        <Route path="/locations/hyderabad" element={<Hyderabad />} />
        <Route path="/locations/banglore" element={<Banglore />} />
        <Route path="/locations/chennai" element={<Chennai />} />
        <Route path="/locations/mumbai" element={<Mumbai />} />
        <Route path="/locations/gurugram" element={<Gurugram />} />
        <Route path="/locations/pune" element={<Pune />} />
        <Route path="/locations/delhi" element={<Delhi />} />

        <Route path="/booking" element={<BookNow/>} />

        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>}></Route>

      </Routes>

      <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App
