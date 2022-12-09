import React from 'react'

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="section1">
                    <h3>ABOUT</h3>
                    <p><strong>Lotus</strong> is a construction company made up of teams people of expertise in construction, approvals, procurement, planning etc. All working to design, build, transport, operate and maintain projects all over India but we believe that projects are about more than steel. we value our clients and their opinion end try to meet expectations.</p>
                </div>
                <div className="section2">
                    <h3>CONTACT US TODAY..!</h3>
                    <ul>
                        <li><i className="fa fa-globe"></i> <span> <b>Corporate Location</b> <br /><p className="footerPara"> Jassur Khas (Nurpur), Pincode: 176201,
                        Distt. Kangra (Himachal Pradesh) </p></span>
                        </li>
                        <li><i className="fa fa-phone"></i> <span> +91-8091096501</span> </li>
                        <li><i className="fa fa-envelope"></i> <span>info@lotusconstructions.in</span> </li>
                        <li><i className="fa fa-clock-o"></i> <span>Monday - Friday: 10:00 AM - 5:00 PM</span> </li>
                        <li><i className="fa fa-clock-o"></i> <span>Saturday - Sunday: 9:00 AM - 12:00 PM</span> </li>
                    </ul>
                </div>
                <div className="section3">
                    <h3>SERVICES</h3>
                    <ol>
                        <li>Commercial Construction</li>
                        <li>Industrial Construction</li>
                        <li>Residential Construction</li>
                    </ol>
                </div>
            </div>
            <div className="section4">
                <p>#Site Developed By :<a href="https://www.linkedin.com/in/nishant-rana-856115173/" target="_blank" rel="noreferrer">(LinkedIn) Nishant Rana</a></p>
            </div>
        </div>
    )
}

export default Footer
