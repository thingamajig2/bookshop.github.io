import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import apollo from '../../assets/images/apollo.jpeg';
import imenseWorld from '../../assets/images/animenseworld.jpeg';
import tiger from '../../assets/images/tiger.png';
import { Description } from '@mui/icons-material';

const BookCarousel = () => {
        return (
            <>
                <div>
                    <img src={imenseWorld} alt='alt'/>
                    <p className="ImenseWorld"></p>
                </div>
                <div>
                    <img src={apollo} alt='alt'/>
                    <p className="Apollo"></p>
                </div>
                <div>
                    <img src={tiger} alt='alt'/>
                    <p className="Tiger"></p>
                </div>
            </>
        );
};

export default BookCarousel;