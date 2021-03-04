import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaGithub } from 'react-icons/fa';
import { SiHackerearth } from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
    footerDiv: {
        height: "10%",
        width: "100%",
        marginTop: "-5px",
        backgroundColor: "#476885",
        textAlign: "center"
    },
}));

function FooterBar() {
    const classes = useStyles();

    const currentYear = new Date().getFullYear();

    return (
        <div className={classes.footerDiv}>
            <p style={{ fontFamily: "Roboto", color: "white", margin: "0" }}>© Sachin Awasthi {currentYear}</p>
            <div style={{ padding: "10px" }}>
                <a style={{ textDecoration: "none" }} target="_blank" href="https://github.com/sachinawasthi32">
                    <FaGithub size="20px" color="black" />
                </a>
                <a style={{ textDecoration: "none", marginLeft: "10px" }} target="_blank" href="https://www.hackerearth.com/@sachinawasthi32">
                    <SiHackerearth size="20px" color="black" />
                </a>
            </div>

        </div>
    );
}

export default FooterBar;