import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../images/aboutusimg.jpg';

export default class About extends Component {
    render() {
        return (
            <>
                <img
                    className="d-block w-100"
                    src={aboutImg}
                    alt="First slide"
                />
                <div className='container'>
                    <h2>Creating Better Communities</h2>
                    <p>Hiranandani Group has been one of the most premium real estate developer in India with more than 40 years of experience in this business. <br />
                        Since its inception in 1978, trust of the people in Hiranandani Group has been the foundation for our success and their unwavering faith motivates us to serve even more. Thousands of families who have created a future with us, will testify for the value that we have added in their lives.<br />
                        We acknowledge the possibilities that the technology offers, that’s why we incorporate technological innovations in our real estate projects and give people excellence and precision in everything. Ultimately, providing an amazing experience to the people is our endeavor.<br /></p>
                    <br />
                    <h2>MISSION & VISION</h2>
                    <p> We grow great by dreams. All big men are dreamers. They see things in the soft haze of a spring day or in the red fire of a long winter's evening. Some of us let these great dreams die, but others nourish and protect them; nurse them through bad days till they bring them to the sunshine and light which comes always to those who sincerely hope that their dreams will come true.- Woodrow Wilson<br /> <br />
                        At Tejas Builders & Developers,
                        we give shape to these dreams, nourish and bring them into reality. We are known for an excellent quality, transparency, integrity, reliability and timely completion of the projects. Our focus is not only to make our Customers satisfied with our service and quality but make them raving fans.
                        Every project from us is a landmark on its own and stands testimony to the strong bond of trust and confidence of our customers. We have homes for every class of the society. Our customers can choose from varied range of affordable to premium class homes.<br /></p>
                    <br />
                    <Container>
                        <h2>OUR VISIONARIES</h2>
                        <Row className='d-flex'>
                            <Col className='p-4'>
                                <h4>Mr. Sangram Patil</h4>
                                <p>Dr. Niranjan Hiranandaniis a Co-Founder and Managing Director, Hiranandani Group of Companies. He also heads a distinct Business Unit Hiranandani Communities.
                                    Dr. Hiranandani, is the son of the Padmabhushan honored ENT specialist Dr. L H Hiranandani. He completed his schooling from Campion School, Mumbai and graduated with a Bachelor of Commerce Degree (Hons.) with a distinction of standing Second in Mumbai University. Adding to his professional qualification, he completed his F.C.A. from the Institute of Chartered Accountants of India and he completed his Doctorate in Philosophy – “Housing Revolution in India Challenges and Prospects”.</p>
                            </Col>
                            <Col className='p-4'>
                                <h4>Mr. Anand Patil</h4>
                                <p>Dr. Niranjan Hiranandaniis a Co-Founder and Managing Director, Hiranandani Group of Companies. He also heads a distinct Business Unit Hiranandani Communities.
                                    Dr. Hiranandani, is the son of the Padmabhushan honored ENT specialist Dr. L H Hiranandani. He completed his schooling from Campion School, Mumbai and graduated with a Bachelor of Commerce Degree (Hons.) with a distinction of standing Second in Mumbai University. Adding to his professional qualification, he completed his F.C.A. from the Institute of Chartered Accountants of India and he completed his Doctorate in Philosophy – “Housing Revolution in India Challenges and Prospects”.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
