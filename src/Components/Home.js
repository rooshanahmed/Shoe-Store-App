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
  },
  title: {
    fontFamily: "Chilanka",
    fontSize: "48px",
    color: "#fff",
  },
  image: {
    // marginLeft: "50px",
    transform: "rotate(-35deg)",
    Height: "70px",
  },
  button: {
    marginTop: "2px",
    fontSize: "16px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    "&:hover": {
      backgroundColor: "black",
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
            variant="contained"
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
