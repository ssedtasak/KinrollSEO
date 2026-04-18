import './LocationModal.css';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const locations = [
  { name: 'Ari (Gump\'s Ari)', url: 'https://page.line.me/296ykvji?oat_content=url&openQrModal=true' },
  { name: 'One Bangkok', url: 'https://www.google.com/maps/reserve/v/dine/c/Dcrg5z3H-8c?source=pa&opi=89978449&hl=en-TH' },
  { name: 'Parc Bangna', url: 'https://www.google.com/maps/reserve/v/dine/c/JJtbfh8ekfM?source=pa&opi=89978449&hl=en-TH' },
  { name: 'The Circle Ratchapruk', url: 'https://www.google.com/maps/reserve/v/dine/c/EBI_y5iLipc?source=pa&opi=89978449&hl=en-TH' },
  { name: 'Charn Chaengwattana', url: 'https://www.google.com/maps/reserve/v/dine/c/RZiOz3csm34?source=pa&opi=89978449&hl=en-TH' }
];

const LocationModal = ({ isOpen, onClose }: LocationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Select Location</h2>
        <p className="modal-subtitle">Where would you like to dine?</p>
        <div className="location-links">
          {locations.map((loc, index) => (
            <a key={index} href={loc.url} target="_blank" rel="noopener noreferrer" className="location-btn">
              {loc.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
