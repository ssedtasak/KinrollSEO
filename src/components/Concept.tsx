import './Concept.css';

const interiorImages = [
  { src: `${import.meta.env.BASE_URL}interior1.jpg`, alt: 'Kinroll Branch Interior 1' },
  { src: `${import.meta.env.BASE_URL}interior2.jpg`, alt: 'Kinroll Branch Interior 2' },
  { src: `${import.meta.env.BASE_URL}interior3.jpg`, alt: 'Kinroll Branch Interior 3' }
];

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
      
      <div className="interior-gallery">
         {interiorImages.map((img, index) => (
           <div key={index} className="interior-image-wrapper">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="interior-img"
              />
           </div>
         ))}
      </div>
    </section>
  );
};

export default Concept;
