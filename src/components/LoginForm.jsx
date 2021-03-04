import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BGImage from '../img/login_bg.jpeg';
import TopBar from './TopBar';
import FooterBar from './FooterBar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import $ from "jquery";
import { useHistory } from 'react-router-dom';
import Auth from '../auth';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '16rem',
        }
    },
    rootDiv: {
        width: "100%",
        height: "100vh"
    },
    mainGrid: {
        backgroundImage: `url(${BGImage})`
    },
    loginForm: {
        textAlign: "center"
    },
    loginText: {
        fontSize: "20px",
        color: "gray",
        fontFamily: "Roboto",
        fontWeight: "bold"
    },
    loginBtn: {
        color: "white",
        backgroundColor: "#4d4dff",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#1a1aff"
        }
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const auth = new Auth();

function LoginForm() {
    const history = useHistory();
    function init() {
        if (auth.autheticated) {
            history.push({
                pathname: '/dashboard'
            });
        }
    }

    useEffect(() => {
        init();
    }, []);

    const classes = useStyles();

    const [tfStateUN, setTfStateUN] = useState(false);
    const [tfHelperTextUN, setTfHelperTextUN] = useState("");
    const [tfStateP, setTfStateP] = useState(false);
    const [tfHelperTextP, setTfHelperTextP] = useState("");
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    function handleLoginPress(e) {
        if (!userNameInput && !passwordInput) {
            setTfHelperTextUN("Username cannot be blank");
            setTfStateUN(true);
            setTfHelperTextP("Password cannot be blank");
            setTfStateP(true);
            e.preventDefault();
            return;
        } else if (!userNameInput) {
            setTfHelperTextUN("Username cannot be blank");
            setTfStateUN(true);
            e.preventDefault();
            return;
        } else if (!passwordInput) {
            setTfHelperTextP("Password cannot be blank");
            setTfStateP(true);
            e.preventDefault();
            return;
        } else {
            if (!userNameInput.match(/^([0-9]|[a-z_])+([0-9a-z_]+)$/i)) {
                setTfHelperTextUN("Only alphabets, numbers, underscore allowed");
                setTfStateUN(true);
                e.preventDefault();
                return;
            } else if (passwordInput.includes(' ')) {
                setTfHelperTextP("Invalid password, no space allowed");
                setTfStateP(true);
                e.preventDefault();
                return;
            } else {
                loginUser();
                e.preventDefault();
            }
        }
    }

    function loginUser() {
        $.get({
            url: "http://localhost:5000/loginUser",
            data: { userNameInput, passwordInput },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if (res.message === "Success") {
                    setOpen(true);
                    setSnackbarMessage("Login successful!");
                    setSnackbarSeverity("success");
                    auth.login();
                    const userDetails = res.userDetails;
                    history.push({
                        pathname: '/dashboard'
                    });
                } else {
                    setOpen(true);
                    setSnackbarMessage("Invalid credentials!");
                    setSnackbarSeverity("error");
                }
            },
            error: function (xhr, status, err) {
                console.error(status, err.toString());
            }
        });
    }

    function handleInputChange(e) {
        const value = e.target.value;
        const id = e.target.id;

        switch (id) {
            case 'username-input':
                setUserNameInput(value);
                setTfHelperTextUN("");
                setTfStateUN(false);
                break;
            case 'password-input':
                setPasswordInput(value);
                setTfHelperTextP("");
                setTfStateP(false);
                break;
            default: break;
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.rootDiv}>
            <TopBar />
            <Grid container className={classes.mainGrid}
                spacing={0} direction="column" alignItems="center"
                justify="center" style={{ minHeight: '85vh' }}>

                <Grid className={classes.loginForm} item lg={3} md={3} sm={6} xs={6}>
                    <p className={classes.loginText}>Login to your account</p>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="username-input" onChange={handleInputChange} error={tfStateUN} value={userNameInput} label="Username" helperText={tfHelperTextUN} variant="outlined" />
                        <TextField id="password-input" onChange={handleInputChange} error={tfStateP} value={passwordInput} value={passwordInput} label="Password" helperText={tfHelperTextP} variant="outlined" type="password" />
                        <Button type="submit" onClick={handleLoginPress} className={classes.loginBtn}>Login</Button>
                    </form>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <FooterBar />
        </div>
    );
}

export default LoginForm;