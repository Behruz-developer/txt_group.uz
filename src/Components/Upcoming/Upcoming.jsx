/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";

const Upcoming = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(true);

  const nextSlide = () => {
    setZoom(true); // Zoom-in boshlanadi
    setTimeout(() => {
      setZoom(false); // 3 sekunddan keyin zoom-out boshlanadi
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Zoom-out tugagach keyingi slaydga o'tish
        setZoom(true); // Keyingi slayd uchun zoom-in boshlanadi
      }, 7000); // 3 sekund zoom-out davomida
    }, 7000); // 3 sekund zoom-in davomida
  };

  useEffect(() => {
    nextSlide(); // Dastlabki renderda birinchi slayd uchun zoom animatsiyasini boshlash
    const autoSlider = setInterval(nextSlide, 15000); // Har bir slaydda umumiy jarayon 6 sekund davom etadi (3 sekund zoom-in + 3 sekund zoom-out)
    return () => clearInterval(autoSlider);
  }, []);

  return (
    <div className="main-carousel" id="home">
      <div className="carousel">
        <div className="items">
          {images &&
            images.map((src, index) => (
              <div
                className={`img_card carousel-image ${index === currentIndex ? "current" : ""}`}
                key={index}
              >
                {src.endsWith(".mp4") ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    style={{
                      width: '100%'
                    }}
                  />
                ) : (
                  <img
                    src={src}
                    alt=""
                    style={{

                    }}
                  />
                )}
                <div className="img_text">
                  <div className="container upcoming_container">
                    <div className="upcoming_box">
                      <div className="upcoming_card">
                        <h3
                          className="slidet_text"
                          key={`navimage${index + 1}`}
                        >
                          Yangi avlod binolari uchun sifatli beton mahsulotlari
                        </h3>
                        <p className="slidet_text2">
                          Beton mahsulotlarini butun O'zbekiston bo'ylab yetkazib beramiz. Yuqori sifat, tezkor xizmat va ishonchli yetkazib berish!
                        </p>
                      </div>
                      {/* <div className="upcoming_icon2_card">
                        <Link
                          to="houses"
                          smooth={true}
                          offset={-50}
                          duration={500}
                          href="#!"
                          className="upcoming_icon2"
                        >
                          Rejalashtirishni tanlash
                        </Link>
                      </div>
                      <div className="upcoming_icons">
                        <div className="upcoming_icons_card">
                          <a href="#!" className="upcoming_icon">
                            Live
                          </a>
                          <Link
                            to="form"
                            smooth={true}
                            offset={-50}
                            duration={500}
                            href="#!"
                            className="upcoming_icon"
                          >
                            <PiPhoneCallLight className="upcoming_phone" />
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
