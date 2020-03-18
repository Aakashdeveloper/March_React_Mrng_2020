import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const showGallery = ({galdata}) => {
    if(galdata){
        return(
            <Slider {...settings}>
                {galdata.map((item) => {
                    return(
                        <Link to="/" className="slider-item">
                            <div className="image"
                                style={{background:`url(/images/galleries/${item.images[0].img})`}}
                            >
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }

}
const GalleryDiplay = (props) => {
    return(
        <div className="home-gallery">
            <h2>Photo Gallery</h2>
            {showGallery(props)}
            <hr/>
        </div>
    )
}

export default GalleryDiplay;