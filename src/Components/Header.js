import React, { useContext } from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Badge
} from "@material-ui/core";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import logo from "./logo-white.svg";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

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
    fontFamily: "Comfortaa",
  },
  icon: {
    color: "#fff",
    marginLeft: "auto",
    display: "flex",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { state } = useContext(GlobalContext);
  const itemsCount = state.lenght;

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
          <IconButton
            className={classes.icon}
            onClick={() => {
              navigate("cart");
            }}
          >
            <Badge badgeContent={itemsCount} color="secondary">
            <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
