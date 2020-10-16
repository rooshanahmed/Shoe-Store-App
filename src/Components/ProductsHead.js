import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/shoes.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    minHeight: "100vh",
    opacity: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ProductsHead = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default ProductsHead;
