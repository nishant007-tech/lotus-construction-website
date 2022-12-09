import React from 'react'
import img2 from '../pictures/img2.jpg'
import { Button } from "@material-ui/core";
function About() {
    return (
        <div className="aboutContainer">
            <div className="abputImageContainer">
                <img src={img2} alt="wallpaper" />
            </div>
            <div className='innerContainerAbout'>
                <div className="content">
                    <h1 id="h1">CONSTRUCTION WITH A DIFFERENCE</h1>
                    <p id="paraTag">Lotus Construction Puts The Focus Back on Exceptional Service
                </p>
                    <span>
                        <a href="/contact-us">
                            <Button id="contactAboutBtn" variant="outlined" color='secondary'>
                                GET A FREE QUOTE
                        </Button>
                        </a>
                    </span>
                </div>
                <div className="imgFooter">
                    <span id="innerPara">Do You Have A Construction Project We Can Help With..?</span>
                </div>
            </div>

            <div className="aboutContent">
                <h2>Building Your Success Starts With Our Experience  </h2>
                <p><strong>Lotus</strong> Construction based company based in Himachal Pradesh. We deliver successful projects in a wide range of industries including residential building and commercial buildings. <br />

               The company was named to keep in the mind to aim to touch the sky while being firmly grounded on solid foundation. The main objective is to utilize our executive deversified experience and to undertake and execute Civil  Engineering project of any Nature and Size to be complete within the sipulated time frame and maintaining the highest standards of quality <br />

                Lotus group of constructions  are  here to aid our clients with our exceptional commercial building construction solutions and help them in acquiring functional, unique and futuristic commercial centres that architecturally beautiful and impeccable at the same time. We understand the importance of adopting client-centric approach, industry best work and appropriate safety measures as well as standards for constructing best in class commercial centres and organizations.<br />

                Our strength and proficiency lies in understanding the primary requirements of our clients and later converting their dreams into reality. Our engineers construct the perfect drawings and strategies for every single project, thereby enabling our clients in obtaining impressive and solid commercial buildings  and centres.<br />

                Lotus focus on maximizing project resources and improving the efficiency of our labours, equipment and materials to assure that our clients appreciate the best services & solutions.</p>
            </div>

        </div>
    )
}

export default About
