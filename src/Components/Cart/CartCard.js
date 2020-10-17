import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const CartCard = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={3} sm={4}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={classes.productImage}
        />
      </Grid>
    </Grid>
  );
};

export default CartCard;
