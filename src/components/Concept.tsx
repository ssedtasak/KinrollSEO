import './Concept.css';

const Concept = () => {
  return (
    <section id="concept" className="concept section-padding">
      <div className="container">
        <div className="concept-content text-center">
          <p className="concept-text serif italic">
            Kinroll is more than just sushi. It's an exploration of texture, temperature, and tradition. 
            Our open-style hand rolls are designed to be eaten immediately, capturing the moment when 
            the seaweed is at its crispest and the fish at its freshest.
          </p>
          <div className="concept-cta">
             <button className="btn-text">Our Story &rarr;</button>
          </div>
        </div>
      </div>
      {/* All branch and brand images removed from this section */}
    </section>
  );
};

export default Concept;
