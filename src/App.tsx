import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Concept from './components/Concept'
import MenuPreview from './components/MenuPreview'
import Location from './components/Location'
import LocationModal from './components/LocationModal'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="container">
          <ul className="nav-links left">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#location">Locations</a></li>
          </ul>

          <div className="logo">KINROLL</div>
          
          <ul className="nav-links right">
            <li>
              <button 
                className="reserve-nav-btn" 
                onClick={() => setIsModalOpen(true)}
              >
                Reservations
              </button>
            </li>
            <li><a href="#concept">Concept</a></li>
          </ul>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
           <ul className="mobile-nav-links">
              <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
              <li><a href="#location" onClick={() => setIsMenuOpen(false)}>Locations</a></li>
              <li><button onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}>Reservations</button></li>
              <li><a href="#concept" onClick={() => setIsMenuOpen(false)}>Concept</a></li>
           </ul>
        </div>
      </header>

      <main>
        <Hero onReserve={() => setIsModalOpen(true)} />
        <Concept />
        <MenuPreview />
        <Location />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
             <div className="footer-logo">KINROLL</div>
             <p className="footer-tagline">Premium Hand Rolls & Modern Sushi Experience</p>
             <div className="social-links">
                <a href="https://www.instagram.com/kinroll.handroll/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/kinroll.handroll" target="_blank" rel="noopener noreferrer">Facebook</a>
             </div>
             <p className="copyright">&copy; {new Date().getFullYear()} KINROLL. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
