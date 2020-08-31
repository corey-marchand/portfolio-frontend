import React from 'react';
import Boat from '../../assets/img/antoine-barres.jpg';
import Carousel from 'react-bootstrap/Carousel';
import FoodieJournals1 from '../../assets/img/food-journals-1.png';
import FoodieJournals2 from '../../assets/img/foodie-journal-2.png';
import FoodieJournals3 from '../../assets/img/foodie-journal-3.png';

const Carasoul = () => (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={FoodieJournals1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={FoodieJournals2}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={FoodieJournals3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default Carasoul;
