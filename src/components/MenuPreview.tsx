import './MenuPreview.css';

const menuImages = [
  '/menu online-02.jpg',
  '/menu online-03.jpg',
  '/menu online-04.jpg',
  '/menu online-05.jpg',
  '/menu online-06.jpg',
  '/menu online-07.jpg',
  '/menu online-08.jpg'
];

const MenuPreview = () => {
  return (
    <section id="menu" className="menu-preview section-padding">
      <div className="container">
        <h2 className="section-title text-center">Our Menu</h2>
        <div className="menu-gallery">
          {menuImages.map((src, index) => (
            <div key={index} className="menu-page">
              <img src={src} alt={`Menu Page ${index + 1}`} className="menu-img" />
            </div>
          ))}
        </div>
        <div className="menu-footer text-center">
          <a href="https://www.instagram.com/kinroll.handroll/" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Follow our Daily Specials &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
