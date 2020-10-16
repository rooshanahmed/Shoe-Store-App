import React from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import logo from "./logo-white.svg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  logo: {
    // width: "80px",
    height: 70,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
  },
  appbarWapper: {
    width: "80%",
    margin: "0 auto",
  },
  button: {
    marginLeft: "25px",
    color: "white",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWapper}>
          <img
            src={logo}
            alt="logo"
            className={classes.logo}
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            disableTouchRipple
            className={classes.button}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            disableTouchRipple
            className={classes.button}
            onClick={() => {
              navigate("products");
            }}
          >
            Products
          </Button>
          <Button
            disableTouchRipple
            className={classes.button}
            onClick={() => {
              navigate("contact-us");
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
