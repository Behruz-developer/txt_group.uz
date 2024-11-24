/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import image1 from '../../assets/images/baraka1.jpg';
import image2 from '../../assets/images/baraka2.jpg';
import image3 from '../../assets/images/baraka3.jpg';
import image4 from '../../assets/images/havas1.jpg';
import image5 from '../../assets/images/havas2.jpg';
import image6 from '../../assets/images/havas3.jpg';
import image7 from '../../assets/images/kamalak1.jpg';
import image8 from '../../assets/images/kamalak2.jpg';
import image9 from '../../assets/images/kamalak3.jpg';

const Upcoming = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="main-image">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="container">
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div className="thumbnail_card">
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>

        ))}
      </div>
      </div>
    </div>
  );
};

export default Upcoming;
