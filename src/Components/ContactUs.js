import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import contact from '../Images/contact.png'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#1A2F43",
        color: "#fff",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "black",
    },
    img: {
        width: "750px",
        height: "450px",
    },
    text: {
        fontFamily: "Comfortaa",
        fontSize: "28px",
    },
    email: {
        fontFamily: "Comfortaa",
        fontSize: "20px",
        marginTop: "15px",
    },
    phone: {
        fontFamily: "Comfortaa",
        fontSize: "20px",
    }
}))


const ContactUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={contact} alt="contact" className={classes.img} />
            <Typography className={classes.text}>You Can Contact Us Anytime</Typography>
            <Typography className={classes.email}>Email: cerclestore@gmail.com</Typography>
            <Typography className={classes.phone}>Phone: +1 123 456 7890</Typography>
        </div>
    )
}

export default ContactUs
