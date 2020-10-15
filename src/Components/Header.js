import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import logo from "./logo-white.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  logo: {
    width: "80px",
    height: "80px",
  },
  root: {
    display: "flex",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
