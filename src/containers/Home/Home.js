import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import VecotBanner from '../../assets/images/banner.svg';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import {FiSearch} from 'react-icons/fi';
import Pattern from '../../assets/images/pattern.svg';
import Black from '../../assets/images/black.svg';
import LocationSvg from '../../assets/images/location.svg';
import RupeeSvg from '../../assets/images/rupee.svg';
import PersonsSvg from '../../assets/images/persons.svg';
import TimerSvg from '../../assets/images/timer.svg';
import WifySvg from '../../assets/images/wify.svg';
import CurvSvg from '../../assets/images/curv.svg';
import leftPatternBanner from '../../assets/images/leftPatternBanner.svg';
import rightPatternBanner from '../../assets/images/rightPatternBanner.svg';
import paperPattern from '../../assets/images/paper-plane 1.svg'
import AboutImg from '../../assets/images/Student stress-pana 1.png';
import {BsArrowUpLeft} from 'react-icons/bs';
import OfferCard from '../../components/OfferCard/OfferCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const Home = () => {
  return (
    <>
        <Header backColor="#FBD37A"/>
        <section className='banner d-flex flex-column justify-content-center' id='hero'>
            <div className='row top-bar align-items-center'>
                <div className='col-12 col-md-6 col-lg-6 left'>
                    <div className='content'>
                        <h1 className='heading'>Better<span className='color-text'>Connect</span></h1>
                        <h1 className='heading'>Better<span className='color-text'>Learning</span></h1>
                        <h1 className='heading'>Better<span className='color-text'>Development</span></h1>
                    </div>
                </div>
                <img src={paperPattern} alt='' className='paper-plane'/>
                <div className='col-12 col-md-6 col-lg-6 right'>
                    <div className='content'>
                        <p><RiDoubleQuotesL className='left'/>If a child is not good in studies doesn't mean that the child is poor in studies or the teacher is bad in teaching. It simply means that they are not the best connect for each other.<RiDoubleQuotesR className='right'/></p>
                    </div>
                </div>
            </div>
            <div className="input-group search">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='City'/>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Subject'/>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Class'/>
                <select className="custom-select" id="inputGroupSelect01">
                    <option value="1">Offline</option>
                    <option value="2">Home-tutor</option>
                    <option value="3">Online</option>
                </select>
                <FiSearch className='search-icon'/>
            </div>
            <div className='img-part'>
                <img src={VecotBanner} alt='vector-banner'/>
            </div>
            <img className='leftPattern' src={leftPatternBanner} alt=''/>
            <img className='rightPattern' src={rightPatternBanner} alt=''/>
        </section>
        <section className='get-connect'>
            <div className='title'>
                <img src={Pattern}  alt='pattern'/>
                <span className='content'>Get <span className='color-text'>connected</span> on the basis of</span>
            </div>
            <div className='inner-pattern d-flex justify-content-between'>
                <div className='horizontal-line'></div>
                <div className='location part d-flex flex-column align-items-center justify-content-center'>
                    <label className='title-text top'>Teacher near you</label>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <img src={LocationSvg} alt=''/>
                    </div>
                    <div className='vertical-line top-line'></div>
                </div>
                <div className='budget part d-flex flex-column align-items-center justify-content-center'>
                    <label className='title-text bottom'>Fee Budget</label>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <img src={RupeeSvg} alt=''/>
                    </div>
                    <div className='vertical-line bottom-line'> </div>
                </div>
                <div className='size part d-flex flex-column align-items-center justify-content-center'>
                    <label className='title-text top'>Batch size</label>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <img src={PersonsSvg} alt=''/>
                    </div>
                    <div className='vertical-line top-line'></div>
                </div>
                <div className='class part d-flex flex-column align-items-center justify-content-center'>
                    <label className='title-text bottom'>Suitable class time</label>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <img src={TimerSvg} alt=''/>
                    </div>
                    <div className='vertical-line bottom-line'> </div>
                </div>
                <div className='learning part d-flex flex-column align-items-center justify-content-center'>
                    <label className='title-text top'>Learning curv</label>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <img src={CurvSvg} alt=''/>
                    </div>
                    <div className='vertical-line top-line'></div>
                </div>
                <div className='online-offline part d-flex flex-column align-items-center justify-content-center'>
                    <label className='title-text bottom'>Offline/Hometutor/Online</label>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <img src={WifySvg} alt=''/>
                    </div>
                    <div className='vertical-line bottom-line'> </div>
                </div>
            </div>
        </section>

        <section className='about-us' id='about'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-6 left'>
                    <img src={AboutImg} alt='' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 right'>
                    <div className='content'>
                        <div className='title'>
                            <img src={Black}  alt='pattern'/>
                            <h2>Who are we and Why should you choose us?</h2>
                        </div>
                        <p className='content-1 d-flex '><div className='outer mt-2'></div><span className='text'>We are building largest teacher student community in India.</span></p>
                        <p className='content-2 d-flex '><div className='outer mt-2'></div><span className='text'>We are trying to help school teacher, home tutor & other freelancer teacher to increase their visibility & reach to students.</span></p>
                        <div className='mission'>
                            <span className='head'>Mission</span>
                            <p className='content'>Structure the offline Tution.</p>
                        </div>
                        <div className='vision'>
                            <span className='head'>Vision</span>
                            <p className='content'>To make students and parents aware of each and every option they can avail to get assistance in holistic development of child.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='offer'>
            <div className='grid-content'>
                <div className='title-card'>
                    <div className='title'>
                        <img src={Pattern}  alt='pattern'/>
                        Our <span className='color-text'>offering</span> to a Teacher
                        <p className='sub-title'>Only for those who teach out of passion or as a service towards society & not only to make money out of it</p>
                        <button className='btn'>Register as teacher<BsArrowUpLeft /></button>
                    </div>
                </div>
                <OfferCard title='Zero Commission ' content="We don't take anything from your pie." />
                <OfferCard title='Grow Student Base' content='There might be hundreds of students located near your class location but only 5-10 knows you. Here you are missing the opportunity to connect with the rest of 90 potential students. We are there to reach out to every potential student.' />
                <OfferCard title='Zero Interference' content='We understand every teacher has its own set of teaching and operational patterns and we never try to intervene into it.' />
                <OfferCard title='Self Onboarding ' content='Just fill the Teacher registration form with certain verification and your name will be on our portal within 24hrs.' />
                <OfferCard title='Valuable Analytics ' content="On the basis of various parameters we will timely inform you with the changes that can help you make better connect with students, although it's completely up to you whether you want to consider or not." />
            </div>
        </section>


        <section className='impact' id='impact'>
                <div className='title'>
                        <img src={Pattern}  alt='pattern'/>
                        Our <span className='color-text'>Impact</span>
                        <p className='sub-title'>Only for those who teach out of passion or as a service towards society & not only to make money out of it</p>
                </div>
                <div className='counter d-flex align-items-center justify-content-around'>
                    <div className='teacher text-center'>
                        <h5 className='title'>Total Teacher</h5>
                        <h4 className='count'>500+</h4>
                    </div>
                    <div className='student text-center'>
                        <h5 className='title'>Total Student</h5>
                        <h4 className='count'>500+</h4>
                    </div>
                    <div className='connected text-center'>
                        <h5 className='title'>Total Connected</h5>
                        <h4 className='count'>500+</h4>
                    </div>
                </div>
        </section>

        <section className='testimonial'>
            <div className='title'>
                <img src={Black}  alt='pattern'/>
                Testimonial
                <p className='sub-title'>Only for those who teach out of passion or as a service towards society & not only to make money out of it</p>
            </div>
            <div className='row mt-5 data'>
                <div className='col-12 col-md-4 col-lg-4 column'>
                    <TestimonialCard />
                </div>
                <div className='col-12 col-md-4 col-lg-4 column'>
                    <TestimonialCard />
                </div>
                <div className='col-12 col-md-4 col-lg-4 column'>
                    <TestimonialCard />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home