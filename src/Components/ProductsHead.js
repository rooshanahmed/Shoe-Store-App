import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/shoes.webp"})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    position: "relative",
    width: "95%",
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1.1)",
  },
}));

const ProductsHead = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default ProductsHead;
