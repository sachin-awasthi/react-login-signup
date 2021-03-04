import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: "#343a40"
    },
    loginBtn: {
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#3333ff",
            color: "white"
        }
    },
    signupBtn: {
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
        marginLeft: "2%",
        '&:hover': {
            backgroundColor: "#f50057",
            color: "white"
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function DashboardPage() {
    const classes = useStyles();
    const history = useHistory();

    function gotoHome() {
        history.push({
            pathname: '/'
        });
    }

    return (
        <div>
            <p>DashboardPage</p>
        </div>
    );
}

export default DashboardPage;