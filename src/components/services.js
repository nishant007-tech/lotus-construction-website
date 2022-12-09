import React from 'react'
import img1 from '../pictures/img1.jpg'

function Services() {
    return (
        <div className="serviceContainer">
            <div className="serviceImageContainer">
                <img src={img1} alt="wallpaper" />
            </div>
            <div className='innerContainerService'>
                <div className="content">
                    <h1 id="head">EXTRAORDINARY PROJECTS WITH EFFICIENT PERFORMANCE</h1>
                    <p id="pTag">Our client share world-building approach, with projects<br /> that transform industries and communities. Efforts of such stunning size.
                    </p>
                </div>
                <div className="imgFooter">
                    <span id="innerPara">We will be Happy to take care of Your Work..!!</span>
                </div>
            </div>
            <div className="serviceContent">
                <h2 id="contentHeading">Services We Provide!!!</h2>
                <div>
                    <ol>
                        <li>Residential building</li>
                        <li>Commercial building</li>
                        <li>Plan design and also civil <br /> engineering projects</li>
                        <li>Reports maps drawings</li>
                        <li>May use computer assisted Engineering<br /> as well as design autocad software to prepare Engineering design documents</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Services
