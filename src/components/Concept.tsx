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
      
      <div className="full-width-image-wrapper">
         {/* High-end architectural detail shot matching Kinroll's minimalist wood design */}
         <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000" 
            alt="Kinroll Minimalist Interior Detail" 
            className="full-width-img"
         />
      </div>
    </section>
  );
};

export default Concept;
