import React from "react";
import { makeStyles } from "@material-ui/core";
import landing from "../Images/landing.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3C52A3",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  image: {
    height: "400px",
    marginLeft: "100px",
  },
  text: {
    fontFamily: "Chilanka",
    fontSize: "36px",
    color: "#fff",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.text}>Giving value to your feet.</h1>
      <img src={landing} alt="landing" className={classes.image} />
    </div>
  );
};

export default Landing;
