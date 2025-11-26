import { Routes, Route } from "react-router-dom"

import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import Hero from "./pages/Hero"
import ListingExplore from "./pages/ListingExplore"
import ListingPage from "./pages/ListingPage"
import NotFound from "./pages/NotFound"
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<ListingExplore />} />
        <Route path="explore/listings/:id" element={<ListingPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
