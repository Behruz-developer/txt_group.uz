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
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper/modules';

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
        <Swiper
          className="thumbnail-container "
          slidesPerView={6}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="thumbnail_card">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Upcoming;
