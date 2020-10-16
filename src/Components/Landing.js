import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import landing from "../Images/landing.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3C52A3",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    maxWidth: "100%",
  },
  image: {
    height: "400px",
    marginLeft: "100px",
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: "36px",
    color: "#fff",
  },
}));

const Landing = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({duration: 2000, easing: "ease"})
  }, []);

  return (
    <div className={classes.root}>
      <h1 className={classes.text}>Giving value to your feet.</h1>
      <img data-aos="fade-left" src={landing} alt="landing" className={classes.image} />
    </div>
  );
};

export default Landing;
