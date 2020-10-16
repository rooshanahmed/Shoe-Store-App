import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

const ProductsListing = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.gridItem} justify="center">
        {data.map((shoe) => {
          const productId = shoe.id.toString();

          return (
            <Grid item xs={12} sm={6} md={3} key={productId}>
              <Link to={productId} className={classes.link}>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={shoe.images[0]}
                      alt={shoe.name}
                      className={classes.cardImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h6'>{shoe.name.toUpperCase()}</Typography>
                        <Typography>${shoe.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsListing;
