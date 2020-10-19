import React from "react";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import visa from "payment-icons/min/single/visa.svg";
import paypal from "payment-icons/min/single/paypal.svg";
import amex from "payment-icons/min/single/amex.svg";
import mastercard from "payment-icons/min/single/mastercard.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  },
  heading: {
    fontSize: "24px",
    textAlign: "center",
    padding: "20px",
  },
  subHead: {
    fontSize: "20px",
    textAlign: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: "10px 20px",
    fontSize: "18px",
    flexDirection: "column",
  },
  button: {
    background: "#4B59F7",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    margin: "10px",
    borderRadius: "4px",
    whiteSpace: "nowrap",
    flexDirection: "column",
    marginTop: "20px",
    "&:hover": {
      background: "#0467FB",
    },
  },
  social: {
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    justifySelf: "start",
    cursor: "pointer",
    textDecoration: "none",
    justifyContent: "space-between",
    margin: "10px",
    color: "#fff",
    alignItems: "center",
  },
  payments: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  img: {
    width: "60px",
    height: "60px",
    margin: "10px",
  },
  text: {
    display: "flex",
    fontFamily: "Comfortaa",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>
        Join our exclusive membership to receive the latest Promotions and Deals
      </Typography>
      <Typography className={classes.subHead}>
        You can subscribe us any time
      </Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          placeholder="Enter Email"
          type="email"
          InputProps={{ disableUnderline: true }}
          style={{
            backgroundColor: "#fff",
            color: "black",
            borderRadius: 5,
            width: "300px",
            alignItems: "center",
          }}
        />
        <Button variant="contained" disableRipple className={classes.button}>
          Subscribe
        </Button>
      </form>
      <div className={classes.social}>
        <Link to="/" className={classes.link}>
          <FaFacebook />
        </Link>
        <Link to="/" className={classes.link}>
          <FaInstagram />
        </Link>
        <Link to="/" className={classes.link}>
          <FaTwitter />
        </Link>
      </div>
      <Typography className={classes.text}>You can pay us by</Typography>
      <div className={classes.payments}>
        <img src={mastercard} alt="mastercard" className={classes.img} />
        <img src={visa} alt="visa" className={classes.img} />
        <img src={amex} alt="amex" className={classes.img} />
        <img src={paypal} alt="paypal" className={classes.img} />
      </div>
    </div>
  );
};

export default Footer;
