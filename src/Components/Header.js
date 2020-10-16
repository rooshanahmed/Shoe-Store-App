import React from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import logo from "./logo-white.svg";

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
  appbarWapper:{
    width: "80%",
    margin: "0 auto",
  },

}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWapper}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Button className={classes.button}>Home</Button>
          <Button className={classes.button}>Products</Button>
          <Button className={classes.button}>Contact Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
