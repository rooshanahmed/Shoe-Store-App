import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  productImage: {
    height: "150px",
    marginRight: "300px",
    [theme.breakpoints.down("xs")]: {
      height: 50,
      width: 85,
    },
  },
  productName: {
    textTransform: "capitalize",
  },
  textGrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    color: "#fff",
    [theme.breakpoints.down("md")]:{
      fontSize: "10px",
      margin: "auto",
      display: "flex",
      marginTop: "30px",
    }
  },
  icon: {
    color: "#fff",
  },
  root: {
    [theme.breakpoints.down("md")]:{
      width: "100%",
    }
  }
}));

const CartCard = ({ product, removeItem }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={3} sm={4}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={classes.productImage}
          />
        </Grid>
        <Grid item xs={7} sm={5} className={classes.textGrid}>
          <Typography variant="h6" className={classes.productName}>
            {product.name}
          </Typography>
          <Typography gutterBottom>Price ${product.price}</Typography>
        </Grid>
        <Grid item xs={1} sm={2}>
          <Tooltip title="Remove From Cart" placement="right-end">
            <IconButton
              aria-label="Remove From Cart"
              onClick={() => removeItem(product)}
              className={classes.icon}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartCard;
