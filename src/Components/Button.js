import React, { useContext } from "react";
import { makeStyles, Button, Tooltip } from "@material-ui/core";
import { GlobalContext } from "../Context/GlobalContext";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "0 auto",
    marginTop: "30px",
    width: "250px",
    display: "block",
    border: "1px solid #fff",
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(45deg, #3D1515 30%, #151753 90%)",
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "20px",
    },
  },
}));

const CartButton = ({ dataItem }) => {
  const classes = useStyles();
  const { state, addItem } = useContext(GlobalContext);
  const isTrue = state.find((item) => item.id === dataItem.id);

  return !isTrue ? (
    <Button
      disableElevation
      onClick={() => addItem(dataItem)}
      className={classes.btn}
      disableRipple
    >
      Add To Cart
    </Button>
  ) : (
    <Tooltip
      title="Already In Cart"
      placement="top-end"
      enterDelay={400}
      leaveDelay={200}
      arrow
    >
      <Button
        disableElevation
        onClick={() => addItem(dataItem)}
        className={classes.btn}
        disableRipple
      >
        Add To Cart
      </Button>
    </Tooltip>
  );
};

export default CartButton;
