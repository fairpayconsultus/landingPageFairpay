import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Modules from './components/Modules'
import Innovation from './components/Innovation'
import SuggestionBanner from './components/SuggestionBanner'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Comparison />
      <Modules />
      <Innovation />
      <SuggestionBanner />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  )
}

export default App
