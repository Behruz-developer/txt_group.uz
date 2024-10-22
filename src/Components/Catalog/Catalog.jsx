import React from "react";
import man from "../../assets/images/man.svg";
import wal from "../../assets/images/wal.svg";
import catalog from "../../assets/images/catalog.png";
import pin_adress from "../../assets/images/pin_adress.svg";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog_box">
          <div className="catalog_card">
            <div className="catalog_card_img">
              <img className="catalog_img" src={catalog} alt="" />
              <div className="catalog_bottom">
                <div className="catalog_bottom_card">
                  <p className="catalog_subtitle">Orifon</p>
                  <p className="catalog_subtitle2">298.9 mln UZS dan</p>
                  <p className="catalog_bottom_text">300 kvartira sotiladi</p>
                </div>
                <div className="catalog_bottom_card">
                  <p class="card_palace">
                    <img className="pin_address" src={pin_adress} alt="" />
                    Tashkent viloyati
                  </p>
                  <p className="catalog_bottom_text">
                    39,8м² (dan) - 111м² (gacha)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog_card">
            <div className="catalog_card_img">
              <img className="catalog_img" src={catalog} alt="" />
              <div className="catalog_bottom">
                <div className="catalog_bottom_card">
                  <p className="catalog_subtitle">Orifon</p>
                  <p className="catalog_subtitle2">298.9 mln UZS dan</p>
                  <p className="catalog_bottom_text">300 kvartira sotiladi</p>
                </div>
                <div className="catalog_bottom_card">
                  <p class="card_palace">
                    <img className="pin_address" src={pin_adress} alt="" />
                    Tashkent viloyati
                  </p>
                  <p className="catalog_bottom_text">
                    39,8м² (dan) - 111м² (gacha)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog_card">
            <div className="catalog_card_img">
              <img className="catalog_img" src={catalog} alt="" />
              <div className="catalog_bottom">
                <div className="catalog_bottom_card">
                  <p className="catalog_subtitle">Orifon</p>
                  <p className="catalog_subtitle2">298.9 mln UZS dan</p>
                  <p className="catalog_bottom_text">300 kvartira sotiladi</p>
                </div>
                <div className="catalog_bottom_card">
                  <p class="card_palace">
                    <img className="pin_address" src={pin_adress} alt="" />
                    Tashkent viloyati
                  </p>
                  <p className="catalog_bottom_text">
                    39,8м² (dan) - 111м² (gacha)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
