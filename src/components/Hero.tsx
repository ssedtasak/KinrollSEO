import './Hero.css';

interface HeroProps {
  onReserve: () => void;
}

const Hero = ({ onReserve }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-image-bg">
        <img 
          src={`${import.meta.env.BASE_URL}hero-new.jpg`} 
          alt="Kinroll Handroll Bar" 
        />
      </div>
      
      {/* 
          Transparent overlay to make the "designed-in" button 
          clickable without showing redundant text.
      */}
      <div className="hero-interactive-layer" onClick={onReserve}></div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
