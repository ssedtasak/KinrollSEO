import './Hero.css';

interface HeroProps {
  onReserve: () => void;
}

const Hero = ({ onReserve }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-image-bg">
        <img 
          src="/hero-new.jpg" 
          alt="Kinroll Handroll Bar" 
        />
      </div>
      <div className="hero-content">
        <div className="hero-brand">KINROLL</div>
        <p className="hero-tagline">Elevated Hand Rolls</p>
        <div className="hero-cta">
           <button className="btn-hero" onClick={onReserve}>Book a Table</button>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
