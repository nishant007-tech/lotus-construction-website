import React, { useState } from 'react'
import contactImg from '../pictures/contact.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import {CloseOutlined} from "@material-ui/icons";
import axios from 'axios';
function Create() {

    const [post, setPost] = useState({
        cropname: "",
        quantity: "",
        price: "",
        contact: "",
        address: "",
    })
    const [open, setOpen] = React.useState(false);
    const [error, isError] = React.useState(false);
    const [errMsg, SetErrMsg] = React.useState("");
    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const submitcontact = async(e) => {
        e.preventDefault();
        try {
            let res = await axios.post("https://api.backendless.com/6D7483E2-8B99-207C-FFD3-7D11D5117600/A8F2BD9D-54EA-4660-A816-F8F23390A798/data/products", post);
            console.log("res",res);
            if(res.status === 200){
                setOpen(true);
                e.target.reset();
            }
        } catch (error) {
            console.log("err is",error);
            setOpen(true);
            isError(true);
            SetErrMsg(error?.response?.data?.message)
            throw error;
        }
    }

    const handleChange =(e)=>{
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }
    console.log("state is",post);
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="primary"
            onClick={handleClose}
          >
            <CloseOutlined fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    return (
        <>
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={error ? errMsg: "Product is added to sell, successfully"}
            action={action}
        />
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
                                onChange={handleChange}
                                className='txtField'
                                label="CROP NAME"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                autoComplete="new-name"
                                name="cropname"
                            />
                            <TextField
                                onChange={handleChange}
                                className='txtField'
                                label="Qantity"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                name="quantity"
                            />
                        </div>
                        <div className="formSection2">
                            <TextField
                                onChange={handleChange}
                                className='txtField'
                                label="PRICE"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                autoComplete="new-name"
                                name="price"
                            />
                            <TextField
                                onChange={handleChange}
                                className='txtField'
                                label="PHONE NUMBER"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                name="contact"
                            />
                        </div>
                        <div className="formSection3">
                            <TextField
                                onChange={handleChange}
                                id='txtField'
                                className="txtField"
                                label="ADDRESS"
                                variant="outlined"
                                color="secondary"
                                required={true}
                                multiline={true}
                                rowsMax='7'
                                rows='7'
                                name="address"

                            />
                        </div>
                        <Button variant='contained' color="secondary" type='submit'>Contact Us</Button>
                    </form>
                </div>

            </div>
        </div>
        </>
    )
}

export default Create
