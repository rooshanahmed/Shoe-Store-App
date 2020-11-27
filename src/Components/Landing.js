import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import landing from "../Images/landing.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#3C52A3",
    backgroundColor: "#EFFAF1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    // maxWidth: "100%",
    [theme.breakpoints.down("md")]:{
      display: "flex",
      flexDirection: "column",
      width: "100%",
    }
  },
  image: {
    height: "400px",
    marginLeft: "100px",
    [theme.breakpoints.down("md")]:{
      height: "250px",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "0",
    }
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: "36px",
    color: "black",
    [theme.breakpoints.down("md")]:{
      fontSize: "24px",
      marginBottom: "80px",
    }
  },
}));

const Landing = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease" });
  }, []);

  return (
    <div className={classes.root}>
      <h1 className={classes.text} data-aos="fade-right">
        Giving value to your feet.
      </h1>
      <img
        data-aos="fade-left"
        src={landing}
        alt="landing"
        className={classes.image}
      />
    </div>
  );
};

export default Landing;
