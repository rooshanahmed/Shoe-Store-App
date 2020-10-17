import React, { useState } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import CartButton from "./Button";

const useStyles = makeStyles((theme) => ({}));

const ProductDetails = ({ data }) => {
  const [val, setVal] = useState(0);
  const { productId } = useParams();
  const classes = useStyles();
  const dataItem = data[productId - 1];

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={12} ms={7}>
          <Paper>
            <img
              src={dataItem.images[val]}
              alt={dataItem.name}
              className={classes.image}
            />
          </Paper>
          <Grid
            container
            spacing={3}
            justify="center"
            className={classes.container}
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                4 Colors Avialable
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
