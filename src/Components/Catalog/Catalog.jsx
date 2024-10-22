import React from 'react'
import man from '../../assets/images/man.svg'
import wal from '../../assets/images/wal.svg'
import catalog from '../../assets/images/catalog.png'

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className="container">
                <div className="catalog_box">
                    <div className="catalog_card">
                        <div className="catalog_top">
                            <div className="catalog_top_card">
                                <div className="catalog_top_card_element">
                                    <div className="catalog_border1"></div>
                                    <p className="catalog_top_text">
                                        Черкизовская
                                    </p>
                                </div>
                                <div className="catalog_top_card_element">
                                    <div className="catalog_border2"></div>
                                    <p className="catalog_top_text">
                                        Щелковская
                                    </p>
                                </div>
                            </div>
                            <div className="catalog_top_card_element">
                                <img src={man} alt="" />
                                <p className="catalog_top_text">25 мин</p>
                            </div>
                            <div className="catalog_top_card_element">
                                <img src={wal} alt="" />
                                <p className="catalog_top_text">Умные планировки</p>
                            </div>
                        </div>
                        <div className="catalog_card_img">
                            <img className='catalog_img' src={catalog} alt="" />
                            <div className="catalog_bottom">
                                <div className="catalog_bottom_card">
                                    <p className="catalog_subtitle">2-й Иртышский</p>
                                    <p className="catalog_subtitle2">От 6 914 540 ₽</p>
                                </div>
                                <div className="catalog_bottom_card">
                                    <p className="catalog_bottom_text">(dan) 47.6 ga 78,28 м²</p>
                                    <p className="catalog_bottom_text">300 kvartira sotiladi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog
