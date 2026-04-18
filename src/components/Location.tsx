import { useState } from 'react';
import './Location.css';

const branches = [
  { 
    name: 'Ari (Gump\'s Ari)', 
    reserve: 'https://page.line.me/296ykvji?oat_content=url&openQrModal=true',
    map: 'https://share.google/hNgDuToinMAxS8z5d',
    embedQuery: 'Kinroll+Ari+Gumps+Ari',
    address: 'Gump\'s Ari, 1st Floor, Bangkok'
  },
  { 
    name: 'One Bangkok', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/Dcrg5z3H-8c?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/pwb8yCRZ18JUb1Yac',
    embedQuery: 'Kinroll+One+Bangkok+The+Storeys',
    address: 'One Bangkok, The Storeys, 1st Floor'
  },
  { 
    name: 'Parc Bangna', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/JJtbfh8ekfM?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/cfl1ttiIuUCceDuVb',
    embedQuery: 'Kinroll+Parc+Bangna',
    address: 'Parc Bangna, Bangkok'
  },
  { 
    name: 'The Circle Ratchapruk', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/EBI_y5iLipc?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/lET2Gb0A1q3Nb9fSN',
    embedQuery: 'Kinroll+The+Circle+Ratchapruk',
    address: 'The Circle Ratchapruk, Bangkok'
  },
  { 
    name: 'Charn Chaengwattana', 
    reserve: 'https://www.google.com/maps/reserve/v/dine/c/RZiOz3csm34?source=pa&opi=89978449&hl=en-TH',
    map: 'https://share.google/sIvP3G3LWlBGfCZrZ',
    embedQuery: 'Kinroll+Charn+Chaengwattana',
    address: 'Charn Chaengwattana, Bangkok'
  }
];

const Location = () => {
  const [selectedBranch, setSelectedBranch] = useState(branches[1]);

  return (
    <section id="location" className="location section-padding">
      <div className="container">
        <h2 className="section-title text-center">Locations</h2>
        
        <div className="location-split">
           <div className="location-list">
              {branches.map((branch, index) => (
                <div 
                  key={index} 
                  className={`location-item ${selectedBranch.name === branch.name ? 'active' : ''}`}
                  onClick={() => setSelectedBranch(branch)}
                >
                  <h3 className="serif italic">{branch.name}</h3>
                  <p className="branch-address">{branch.address}</p>
                  <div className="location-links">
                     <a href={branch.reserve} target="_blank" rel="noopener noreferrer">Reserve</a>
                     <a href={branch.map} target="_blank" rel="noopener noreferrer">Directions</a>
                  </div>
                </div>
              ))}
           </div>

           <div className="location-map-wrapper">
              <iframe
                title={`Kinroll ${selectedBranch.name}`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                src={`https://maps.google.com/maps?q=${selectedBranch.embedQuery}+Kinroll+Thailand&output=embed`}
                allowFullScreen
              ></iframe>
           </div>
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
