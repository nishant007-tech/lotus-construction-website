import React from 'react'
import backImg from '../pictures/work.jpg'
import constructionImg from '../pictures/constructionImg.jpg'
import backImg2 from '../pictures/backImg.jpg'
import img1 from '../pictures/img1.jpg'
import img2 from '../pictures/img2.jpg'
import { Button } from "@material-ui/core";
function Home() {

    return (
        <div className="homeContainer">
            <div className="imageContainer">
                <img src={backImg} alt="wallpaper" />
            </div>
            <div className='innerContainer'>
                <div className="content">
                    <h1 id="h1">Constructing Spaces Of Your Dreams</h1>
                    <p id="paraTag">Lotus Construction - A trusted construction company in India!
                </p>
                    <span>
                        <a href="/contact-us">
                            <Button variant="contained" id="contactBtn">
                                CONTACT US
                            </Button>
                        </a>
                    </span>
                </div>
                <div className="imgFooter">
                    <span id="innerPara">Do you have any construction works? Come let us build it together…!</span>
                </div>
            </div>
            <div className="nextContainer">
                <h2>Experts in Modern Construction</h2>
                <p>Construction is not just putting the bricks to create some shapes. We just make your construction a masterpiece in architecture to make your investment really worth and dreams come true.</p>
            </div>
            <hr />

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={constructionImg} alt='cardImg' />
                        <span className="cardInnerFront"><i className='fa fa-home' ></i></span>
                        <h2>BUILDINGS</h2>
                    </div>
                    <div className="flip-card-back">
                        <h1>BUILDINGS</h1>
                        <p>Not all buildings are the same. Every building has its own features and characteristics. Our experts with high creativity and incredible experience construct buildings that shower architectural excellence at its maximum to make you feel proud of your asset.</p>
                    </div>
                </div>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={backImg2} alt='cardImg' />
                        <span className="cardInnerFront"><i className='fa fa-gavel' ></i></span>
                        <h2>CONST-<br />RUCTION</h2>
                    </div>
                    <div className="flip-card-back">
                        <h1>CONSTRUCTION</h1>
                        <p>We value the emotions and budget of our clients. Whatever is the size or type of your building, home, or unit, we can provide you with the best design at an affordable budget. Our construction works are commenced on time, guided by a team of engineers and supervisors to assure perfection and quality at all levels.</p>
                    </div>
                </div>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={img1} alt='cardImg' />
                        <span className="cardInnerFront"><i className='fa fa-suitcase' ></i></span>
                        <h2>EXCLUSIVE PROJECTS</h2>
                    </div>
                    <div className="flip-card-back">
                        <h1>EXCLUSIVE PROJECTS</h1>
                        <p>Do you have any exclusive construction projects? We are ready to craft the best design and to turn into a wonderful piece of construction. Our creative team of designers is always ready to give a stylish and superb shape to your property within the available space and budget to make it a wonder under the sky.</p>
                    </div>
                </div>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={img2} alt='cardImg' />
                        <span className="cardInnerFront"><i className='fa fa-vcard' ></i></span>
                        <h2>OUR PORTFOLIO</h2>
                    </div>
                    <div className="flip-card-back">
                        <h1>OUR PORTFOLIO</h1>
                        <p>We just don’t like bragging. Have a look at our recently completed works. It speaks and showcases our extravagance in constructing residential, commercial, and industrial properties.
                        When we say we construct the best buildings for you, we really mean it in terms of quality and
                        cost.</p>
                    </div>
                </div>
            </div>
            {/* end card */}


        </div >
    )
}

export default Home
