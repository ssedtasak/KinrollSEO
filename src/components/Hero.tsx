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
      {/* 
          Note: Brand text and CTA removed here because 
          they are already part of the hero-new.jpg image 
      */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
