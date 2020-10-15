import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#1A2F43",
        backgroundRepeat: "no-repeat",
        display: "flex",
        backgroundSize: "cover",
        minHeight: "100vh",
    }
}))

const Home = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default Home
