import React, { useState } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import CartButton from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    // minWidth: "100%",
    backgroundColor: "#1A2F43",
    // backgroundColor: "black",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  image: {
    width: "100%",
  },
  heading: {
    textTransform: "uppercase",
    padding: theme.spacing(2),
    paddingBottom: 0,
    fontFamily: "Comfortaa",
    color: "#fff",
    fontSize: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  price: {
    padding: theme.spacing(2),
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: 500,
    fontFamily: "Comfortaa",
    color: "#fff",
    fontSize: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  title: {
    textTransform: "uppercase",
    padding: theme.spacing(2),
    paddingBottom: 0,
    letterSpacing: "1px",
    fontStyle: "italic",
    fontFamily: "Comfortaa",
    color: "#fff",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  description: {
    letterSpacing: "3px",
    padding: theme.spacing(2),
    fontFamily: "Comfortaa",
    color: "#fff",
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  container: {
    maxWidth: "80%",
    margin: "0 auto",
  },
  avialableColor: {
    height: 50,
    width: 85,
    border: "2px solid black",
    cursor: "pointer",
  },
  grd: {
    marginTop: 50,
  },
  paper: {
    [theme.breakpoints.down("md")]: {
      marginTop: "60px",
    },
  },
}));

const ProductDetails = ({ data }) => {
  const [val, setVal] = useState(0);
  const { productId } = useParams();
  const classes = useStyles();
  const dataItem = data[productId - 1];

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="center" className={classes.grd}>
        <Grid item xs={8} sm={5} md={6}>
          <Paper className={classes.paper}>
            <img
              src={dataItem.images[val]}
              alt={dataItem.name}
              className={classes.image}
            />
          </Paper>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.container}
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="subtitle1"
                style={{ textAlign: "center", color: "#fff" }}
              >
                4 Colors Available
              </Typography>
            </Grid>
            {dataItem.images.map((image, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={2}
                key={index}
                onClick={() => setVal(index)}
              >
                <img
                  src={image}
                  alt={dataItem.name}
                  className={classes.avialableColor}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h3" className={classes.heading}>
            {dataItem.name}
          </Typography>
          <Typography className={classes.price}>${dataItem.price}</Typography>
          <Typography variant="h6" className={classes.title}>
            {dataItem.title}
          </Typography>
          <Typography className={classes.description}>
            {dataItem.description}
          </Typography>
          <CartButton dataItem={dataItem} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
