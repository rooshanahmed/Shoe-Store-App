import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import contact from "../Images/contact.png";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

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
    [theme.breakpoints.down("md")]: {
      width: "420px",
    },
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: "28px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  email: {
    fontFamily: "Comfortaa",
    fontSize: "20px",
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  phone: {
    fontFamily: "Comfortaa",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  address: {
    fontFamily: "Comfortaa",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const { keyframes: main, timing: mainTime } = fadeIn;

  const { ref } = useWebAnimations({
    keyframes: main,
    timing: {
      ...mainTime,
      delay: "1000",
      easing: "ease-in",
    },
  });

  return (
    <div className={classes.root}>
      <img src={contact} alt="contact" className={classes.img} ref={ref} />
      <Typography className={classes.text}>
        You Can Contact Us Anytime
      </Typography>
      <Typography className={classes.email}>
        Email: cerclestore@gmail.com
      </Typography>
      <Typography className={classes.phone}>Phone: +1 123 456 7890</Typography>
      <Typography className={classes.address}>
        Address: 208 Main St Edward, NC 27821, USA
      </Typography>
    </div>
  );
};

export default ContactUs;
