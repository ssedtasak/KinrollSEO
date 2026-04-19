import { useState } from 'react';
import './Location.css';

const branches = [
  { 
    id: 'ari',
    shortName: 'Ari',
    name: 'Ari (Gump\'s Ari)', 
    reserve: 'https://page.line.me/296ykvji?oat_content=url&openQrModal=true',
    map: 'https://share.google/hNgDuToinMAxS8z5d',
    embedQuery: 'Kinroll+Ari+Gumps+Ari',
    address: 'Gump\'s Ari, 1st Floor, Bangkok',
    image: '/interior1.jpg'
  },
  { 
    id: 'one',
    shortName: 'One Bangkok',
    name: 'One Bangkok', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/Dcrg5z3H-8c?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/pwb8yCRZ18JUb1Yac',
    embedQuery: 'Kinroll+One+Bangkok+The+Storeys',
    address: 'One Bangkok, The Storeys, 1st Floor',
    image: '/interior2.jpg'
  },
  { 
    id: 'parc',
    shortName: 'Bangna',
    name: 'Parc Bangna', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/JJtbfh8ekfM?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/cfl1ttiIuUCceDuVb',
    embedQuery: 'Kinroll+Parc+Bangna',
    address: 'Parc Bangna, Bangkok',
    image: '/interior1.jpg'
  },
  { 
    id: 'circle',
    shortName: 'Ratchapruk',
    name: 'The Circle Ratchapruk', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/EBI_y5iLipc?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/lET2Gb0A1q3Nb9fSN',
    embedQuery: 'Kinroll+The+Circle+Ratchapruk',
    address: 'The Circle Ratchapruk, Bangkok',
    image: '/interior3.jpg' 
  },
  { 
    id: 'charn',
    shortName: 'Chaengwattana',
    name: 'Charn Chaengwattana', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/RZiOz3csm34?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/sIvP3G3LWlBGfCZrZ',
    embedQuery: 'Kinroll+Charn+Chaengwattana',
    address: 'Charn Chaengwattana, Bangkok',
    image: '/interior2.jpg'
  }
];

const Location = () => {
  const [selectedBranch, setSelectedBranch] = useState(branches[1]); // Default to One Bangkok

  return (
    <section id="location" className="location section-padding">
      <div className="container">
        <h2 className="section-title text-center">Locations</h2>
        
        {/* Option 1: Minimalist Tab Selector */}
        <div className="branch-selector">
           {branches.map((branch) => (
             <button 
                key={branch.id}
                className={`tab-btn ${selectedBranch.id === branch.id ? 'active' : ''}`}
                onClick={() => setSelectedBranch(branch)}
             >
               {branch.shortName}
             </button>
           ))}
        </div>

        <div className="location-detail-card">
           <div className="detail-visual">
              <img src={`${import.meta.env.BASE_URL}${selectedBranch.image.substring(1)}`} alt={selectedBranch.name} className="detail-img" />
           </div>
           
           <div className="detail-info text-center">
              <h3 className="serif italic">{selectedBranch.name}</h3>
              <p className="detail-address">{selectedBranch.address}</p>
              <div className="detail-actions">
                 <a href={selectedBranch.reserve} target="_blank" rel="noopener noreferrer" className="btn-outline compact">Book a Table</a>
                 <a href={selectedBranch.map} target="_blank" rel="noopener noreferrer" className="btn-text-link">Get Directions &rarr;</a>
              </div>
           </div>
        </div>

        <div className="location-map-container">
           <iframe
              title={`Kinroll ${selectedBranch.name}`}
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }}
              src={`https://maps.google.com/maps?q=${selectedBranch.embedQuery}+Kinroll+Thailand&output=embed`}
              allowFullScreen
           ></iframe>
        </div>

        <div className="hours-section text-center">
           <h3 className="category-title">Open Daily</h3>
           <p className="hours-text serif italic">11:00 – 22:00</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
