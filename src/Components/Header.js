import React, { useContext } from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Badge,
  Tooltip,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./logo-white.svg";
import { useNavigate, Link } from "react-router-dom";
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
    // [theme.breakpoints.down("md")]: {
    //   // display: "block",
    //   // flexDirection: "column",
    // },
  },
  appbarWapper: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  button: {
    marginLeft: "25px",
    color: "white",
    fontFamily: "Comfortaa",
    "&:hover": {
      background: "none",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "8px",
      marginLeft: "0",
    },
  },
  icon: {
    color: "#fff",
    marginLeft: "auto",
    display: "flex",
    "&:hover": {
      background: "none",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
  },
}));

const Header = () => {
  const { state } = useContext(GlobalContext);
  const itemsCount = state.length;
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWapper}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className={classes.logo}
            />
          </Link>
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
          <Tooltip title="Shopping Cart">
            <IconButton
              disableTouchRipple
              className={classes.icon}
              onClick={() => {
                navigate("cart");
              }}
            >
              <Badge badgeContent={itemsCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
