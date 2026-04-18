import './MenuPreview.css';

const menuImages = [
  'menu_online_02.jpg',
  'menu_online_03.jpg',
  'menu_online_04.jpg',
  'menu_online_05.jpg',
  'menu_online_06.jpg',
  'menu_online_07.jpg',
  'menu_online_08.jpg'
];

const MenuPreview = () => {
  return (
    <section id="menu" className="menu-preview section-padding">
      <div className="container">
        <h2 className="section-title text-center">Our Menu</h2>
        <div className="menu-gallery">
          {menuImages.map((src, index) => (
            <div key={index} className="menu-page">
              <img src={`${import.meta.env.BASE_URL}${src}`} alt={`Menu Page ${index + 1}`} className="menu-img" />
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
