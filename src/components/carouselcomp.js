import React, { Component } from 'react';
import './body.css';
import { Carousel, Container } from 'react-bootstrap';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';

export default class carouselcomp extends Component {
    render() {
        return (
            <Container className='bg-light p-0'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Tejas Heritage</h3>
                            <p>Ulwe, Navi Mumbai
                                MAHA RERA NO P52000025147</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Tejas Emerald</h3>
                            <p>Ulwe, Navi Mumbai
                                MAHA RERA NO P52000025147</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Tejas Komal</h3>
                            <p>Ulwe, Navi Mumbai
                                MAHA RERA NO P52000025147</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}
