import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    letterSpacing: "1px",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Comfortaa",
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
      margin: "auto auto",
      marginTop: 20,
    },
  },
  btn: {
    width: "200px",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: "1px solid #1A2F43",
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(45deg, #3D1515 30%, #151753 90%)",
      color: "#fff",
    },
  },
  paddingStyle: {
    marginBottom: 10,
  },
}));

const Summary = ({ productsCount, total, payment }) => {
  const classes = useStyles();
  const item = productsCount === 1 ? "Item" : "Items";

  return (
    <div>
      <Paper elevation={8} className={classes.paper}>
        <Typography>Total Items</Typography>
        <Typography variant="h6" className={classes.paddingStyle}>
          {productsCount}
        </Typography>
        <Typography>Total Amount</Typography>
        <Typography variant="h6" className={classes.paddingStyle}>
          ${total}
        </Typography>
        <hr />
        <Button
          disableElevation
          disableTouchRipple
          endIcon={<ArrowForwardIcon />}
          className={classes.btn}
          onClick={() => {
            swal(
              "Checkout Successfull!",
              `You Have Purchased ${productsCount} ${item}!`,
              "success"
            );
            payment();
          }}
        >
          Check Out
        </Button>
      </Paper>
    </div>
  );
};

export default Summary;
