import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Process from './components/Process'
import Pricing from './components/Pricing'
import { LanguageProvider } from './context/LanguageContext'
import { translations } from './translations'
import './App.css'

function App() {
  return (
    <LanguageProvider translations={translations}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
