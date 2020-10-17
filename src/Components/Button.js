import React, { useContext } from "react";
import { makeStyles, Button, Tooltip } from "@material-ui/core";
import { GlobalContext } from "../Context/GlobalContext";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "0 auto",
    display: "block",
    background: "black",
    color: "#fff",
    "&:hover": {
      background: "#1A2F43",
      color: "#fff",
    },
  },
}));

const CartButton = ({ dataItem }) => {
  const classes = useStyles();
  const { state, addItem } = useContext(GlobalContext);
  const isTrue = state.find((item) => item.id === dataItem.id);

  return !isTrue ? (
    <Button
      variant="contained"
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
        variant="contained"
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
