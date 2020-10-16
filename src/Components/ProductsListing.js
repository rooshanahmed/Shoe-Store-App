import React, { useEffect } from "react";
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
import ProductsHead from "./ProductsHead";
import Aos from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    marginTop: 30,
    maxWidth: "96vw",
    minHeight: "100vh",
  },
  link: {
    textDecoration: "none",
  },
  type: {
    fontSize: "32px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 20,
    fontFamily: "Comfortaa",
  },
  cardRoot: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  cardContent:{
    fontFamily: "Comfortaa",
  },
}));

const ProductsListing = ({ data }) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ProductsHead />
      <Typist className={classes.type} cursor={{ show: false }}>
        <Typist.Delay ms={1500} />
        <span>Check Out Our Latest Products!!!</span>
      </Typist>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          className={classes.gridItem}
          justify="center"
        >
          {data.map((shoe) => {
            const productId = shoe.id.toString();
            return (
              <Grid item xs={12} sm={6} md={3} key={productId}>
                <Link to={productId} className={classes.link}>
                  <Card className={classes.cardRoot} data-aos="fade-up">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={shoe.images[0]}
                        alt={shoe.name}
                        className={classes.cardImage}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          gutterBottom
                          variant="h6"
                        >
                          {shoe.name.toUpperCase()}
                        </Typography>
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
    </>
  );
};

export default ProductsListing;
