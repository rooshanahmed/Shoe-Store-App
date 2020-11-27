import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import shoe from "../Images/shoe.png";
import { useNavigate } from "react-router-dom";
import Landing from "./Landing";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1A2F43",
    backgroundRepeat: "no-repeat",
    display: "flex",
    backgroundSize: "cover",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    // maxWidth: "100%",
    [theme.breakpoints.down("md")]:{
      display: "flex",
      flexDirection: "column",
      // maxWidth: "100%",
    }
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: "42px",
    color: "#fff",
    [theme.breakpoints.down("md")]:{
      fontSize: "28px",
      marginTop: "200px",
    }
  },
  image: {
    // marginLeft: "50px",
    transform: "rotate(-35deg)",
    // height: "70px",
    [theme.breakpoints.down("md")]:{
      height: "340px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }
  },
  button: {
    color: "#fff",
    marginTop: "2px",
    fontSize: "16px",
    width: "200px",
    background: "transparent",
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: "Comfortaa",
    border: "1px solid #7E83A0",
    "&:hover": {
      background: "linear-gradient(45deg, #671F02 30%, #972F06 90%)",
      color: "#fff",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.root}>
        <div>
          <h2 className={classes.title}>Cercle Shoe Store</h2>
          <Button
            disableTouchRipple
            disableElevation
            className={classes.button}
            onClick={() => {
              navigate("products");
            }}
          >
            Shop Now!!
          </Button>
        </div>
        <img src={shoe} alt="shoe" className={classes.image} />
      </div>
      <Landing />
    </>
  );
};

export default Home;
