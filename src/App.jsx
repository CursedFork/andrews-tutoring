import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Subjects from './components/Subjects.jsx'
import Pricing from './components/Pricing.jsx'
import About from './components/About.jsx'
import Guitar from './components/Guitar.jsx'
import Booking from './components/Booking.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects />
        <Pricing />
        <About />
        <Guitar />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
