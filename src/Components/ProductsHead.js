import React from 'react'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    root:{
        backgroundImage: `url(../Images/shoes.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
    }
}));


const ProductsHead = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <h1>Check Out Our Latest Products</h1>
        </div>
    )
}

export default ProductsHead
