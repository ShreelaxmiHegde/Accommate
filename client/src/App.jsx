import { Routes, Route } from "react-router-dom"

import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import { useFlash} from './context/FlashContext';
import FlashMsg from './components/FlashMsg.jsx';

import Hero from "./pages/Hero"
import ListingExplore from "./pages/ListingExplore"
import ListingPage from "./pages/ListingPage"
import NotFound from "./pages/NotFound"
import './index.css'

function App() {
  
  const {flash, setFlash} = useFlash();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<ListingExplore />} />
        <Route path="explore/listings/:id" element={<ListingPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <FlashMsg flash={flash} setFlash={setFlash} />
      <Footer />
    </>
  )
}

export default App
