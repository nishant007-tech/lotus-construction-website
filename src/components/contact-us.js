import React from 'react'
import contactImg from '../pictures/contact.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
function ContactUs() {

    const submitcontact = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qjj13gq', 'template_b0qsm4d', e.target, 'user_KPZSDs2FFlA5SdfXYQjwG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contactContainer">
            <div className="contactImageContainer">
                <img src={contactImg} alt="wallpaper" />
            </div>
            <div className='innerContactContainer'>
                <div className="content">
                    <h1 id="contactHead">GET A FREE QUOTE</h1>
                </div>
                <div className="imgFooter">
                    <span id="innerPara">Our Construction Team Are On-Hand To Help Everyday..!!</span>
                </div>

            </div>
            <div className="contactContent">
                <div className="contactSection1">
                    <h3>OFFICE ADDRESS</h3>
                    <hr className="contactHr" />
                    <ul>
                        <li><i className="fa fa-globe"></i> <span> <b>Corporate Location</b> <br /><p className="footerPara"> Jassur Khas (Nurpur), Pincode: 176201<br />
                        Distt. Kangra (Himachal Pradesh)</p></span>
                        </li>
                        <li><i className="fa fa-phone"></i> <span> +91-8091096501</span> </li>
                        <li><i className="fa fa-envelope"></i> <span>info@lotusconstruction.in</span> </li>
                        <li><i className="fa fa-clock-o"></i> <span>Monday - Friday: 10:00 AM - 5:00 PM</span> </li>
                        <li><i className="fa fa-clock-o"></i> <span>Saturday - Sunday: 9:00 AM - 12:00 PM</span> </li>
                    </ul>
                    <hr className="contactHr " />

                </div>
                <div className="contactSection2">
                    <h3>Talk To Us – We’re Here To Help</h3>
                    <hr className="contactHr" />
                    <form onSubmit={submitcontact}>
                        <div className="formSection1">
                            <TextField
                                className='txtField'
                                label="FIRST NAME"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                autoComplete="new-name"
                                name="name"
                            />
                            <TextField
                                className='txtField'
                                label="LAST NAME"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                name="lastname"
                            />
                        </div>
                        <div className="formSection2">
                            <TextField
                                className='txtField'
                                label="EMAIL ADDRESS"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                autoComplete="new-name"
                                name="email"
                            />
                            <TextField
                                className='txtField'
                                label="PHONE NUMBER"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                name="phone"
                            />
                        </div>
                        <div className="formSection3">
                            <TextField
                                className='txtField'
                                label="SUBJECT"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                name='subject'
                            />
                            <TextField
                                id='txtField'
                                className="txtField"
                                label="HOW CAN WE HELP?"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                multiline={true}
                                rowsMax='7'
                                rows='7'
                                name="message"

                            />
                        </div>
                        <Button variant='contained' color="secondary" type='submit'>Contact Us</Button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUs
