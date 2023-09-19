import React, { Component } from 'react';
import Carousel from './ImageCarousel';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import content from '../images/content.jpg';
import newsImg from '../images/new.jpg';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class BodyContent extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Container className='p-0'>
                    <Row className='upperpart'>
                        <Col className='m-3 p-3 border border-secondary bg-white'>
                            <br />
                            <h2>Home... a dream of every human.</h2> <br /> <br />
                            <p>At Tejas Builders & Developers, we give shape to these dreams, nourish and bring them into reality. We are known for an excellent quality, transparency, integrity, reliability and timely completion of the projects. Every project from us is a landmark on its own and stands testimony to the strong bond of trust and confidence of our customers. We have homes for every class of the society. Our customers can choose from varied range of affordable to premium class homes.</p>
                        </Col>
                        <Col className='m-3 p-3 border border-secondary bg-white' >
                            <img className="image" src={content} alt="not found"></img>
                        </Col>
                    </Row>
                    <Row className='upperpart'>
                        <Col className='m-3 p-3 border border-secondary bg-white'>
                            <img className="image" src={newsImg} alt="not found" />
                        </Col>
                        <Col className='m-3 p-3 border border-secondary bg-white'>
                            <br />
                            <h2>News / Awards</h2> <br /> <br />
                            <p>The Star Awards is an annual ceremony held in Singapore where the media organisation Mediacorp recognises entertainers under their employment for outstanding performances of the year. Mediacorp first presented in 1994 took place at the Caldecott Broadcast Centre, MediaCorp TV Theatre hosted by Chen Shucheng and Yvette Tsui.  <br /><br />

                                The 25th Star Awards ceremony, honoring the best Singaporean television of 2018 will be held on 14 April 2019, at the Mediacorp Campus, MES Theatre @ Mediacorp. The ceremony will be broadcast live on MeWatch (previously Toggle), Mediacorp Channel 8 and Mediacorp Channel U. The upcoming 26th ceremony, honoring television for 2019 and 2020, was originally rescheduled to the second half of the year but pushed back until 18 April 2021 due to the current COVID-19 pandemic.[1]
                            </p>
                        </Col>
                    </Row>
                    <div className="cards">
                        <div className="row upper">
                            <div className="col-sm">
                                <br />
                                <h3>Manufacturing</h3>
                                <br />
                            </div>
                            <div className="col-sm">
                                <br />
                                <h3>Sales</h3>
                                <br />
                            </div>
                            <div className="col-sm">
                                <br />
                                <h3>Technology</h3>
                                <br />
                            </div>
                            <div className="col-sm">
                                <br />
                                <h3>Marketing</h3>
                                <br />
                            </div>
                        </div>
                        <div className="row bottom">
                            <Link to='/completed' className="col-sm text-dark text-decoration-none">

                                <div>
                                    <br />
                                    <h3> Completed Projects </h3>
                                    <br />
                                </div>
                            </Link>
                            <Link to='/ongoing' className="col-sm text-dark text-decoration-none">

                                <div>
                                    <br />
                                    <h3 className='ajitt'>Ongoing Projects</h3>
                                    <br />
                                </div>
                            </Link>
                            <Link to='/future' className="col-sm text-dark text-decoration-none">

                                <div>
                                    <br />
                                    <h3>Future Projects</h3>
                                    <br />
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
                <div className='contain d-flex justify-content-center'>
                    <div className="d-flex flex-wrap container lowe">
                        <div className="lower">
                            <div className="lower">
                                <img className='footerlogo' src={logo} alt="not found" />
                            </div>
                            <div>
                                <br />
                                <p>Copyright @ 2017-18. <br />

                                    <span className='itemslower'>
                                        Tejas Builders & Developers </span>.
                                </p>
                            </div>
                        </div>

                        <div className="lower">
                            <div className="heading">
                                <h4 className="white h-quartely">See more at </h4>
                            </div>
                            <div className="content">
                                <Link to='/about' className='text-dark text-decoration-none d-flex p-2 justify-content-center'>About Us</Link>
                                <Link to='/completed' className='text-dark text-decoration-none d-flex p-2 justify-content-center'>Completed Projects</Link>
                                <Link to='/ongoing' className='text-dark text-decoration-none d-flex p-2 justify-content-center'>Ongoing Projects</Link>
                                <Link to='/future' className='text-dark text-decoration-none d-flex p-2 justify-content-center'>Future Projects</Link>
                                <Link to='/careers' className='text-dark text-decoration-none d-flex p-2 justify-content-center'>Careers</Link>
                                <Link to='contactus' className='text-dark text-decoration-none d-flex p-2 justify-content-center'>Contact Us</Link>
                            </div>
                        </div>

                        <div className="lower">
                            <div className="heading">
                                <h4 className="white h-quartely">Contact us </h4>
                            </div>
                            <div className="content">
                                Call us: <br /> 97692 88956 <br /> <br />
                                Mail us: <br /> sales@tejasinfratech.com <br /> admin@tejasinfratech.com
                            </div>
                        </div>

                        <div className="lower">
                            <div className="heading">
                                <h4 className="white h-quartely">Follow us </h4>
                            </div>
                            <div id="content">
                                <Nav.Link className="social-media-link" href="https://www.facebook.com/TejasBuildersandDevelopers/" target='_blank'>
                                    <FacebookIcon color="primary" className='links text-decoration-none' /></Nav.Link>
                                <Nav.Link className="social-media-link" href="https://www.facebook.com/TejasBuildersandDevelopers/" target='_blank'>
                                    <TwitterIcon color="primary" className='links text-decoration-none' /></Nav.Link>
                                <Nav.Link className="social-media-link" href="https://www.facebook.com/TejasBuildersandDevelopers/" target='_blank'>
                                    <InstagramIcon color="primary" className='links text-decoration-none' /></Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
