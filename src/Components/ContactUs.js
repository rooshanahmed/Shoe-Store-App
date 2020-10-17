import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "#fff",
        minHeight: "100vh",
    }
}))


const ContactUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Work In Progress</h1>
        </div>
    )
}

export default ContactUs
