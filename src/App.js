import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BGImage from './img/home_bg_2.PNG';
import TopBar from './components/TopBar';
import { FaGithub } from 'react-icons/fa';
import { SiHackerearth } from 'react-icons/si';
import LoginForm from './components/LoginForm';

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    width: "100%",
    height: "100vh"
  },
  middleDiv: {
    width: "100%",
    height: "90%",
    textAlign: "center",
    backgroundImage: `url(${BGImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  footerDiv: {
    height: "10%",
    width: "100%",
    marginTop: "-5px",
    backgroundColor: "#476885",
    textAlign: "center"
  },
  welcomeText: {
    margin: "0",
    color: "white",
    fontSize: "60px",
    fontFamily: "Roboto",
    textShadow: "2px 2px red",
    position: "absolute",
    top: "350px",
    left: "10px"
  }

}));

function App() {
  const classes = useStyles();
  const [welcomeText, setWelcomeText] = useState("");

  const wText = 'Worried about where your money being spent?';
  var wText2 = wText;
  var newText = "", i = 0;
  function init() {
    if (i < wText2.length) {
      newText = newText + wText2.charAt(i);
      setWelcomeText(newText);
      i++;
      setTimeout(init, 60);
    } else {
      newText = wText; i = 0; wText2 = "Signup now";
      setTimeout(init, 1000);
    }
  }

  useEffect(() => {
    init();
  }, []);


  return (
    <div className={classes.rootDiv}>
      <TopBar />
      <div className={classes.middleDiv}>
        <p className={classes.welcomeText}>{welcomeText}</p>
      </div>

      <div className={classes.footerDiv}>
        <p style={{ fontFamily: "Roboto", color: "white", margin: "0" }}>© Sachin Awasthi</p>
        <div style={{ padding: "10px" }}>
          <a style={{ textDecoration: "none" }} target="_blank" href="https://github.com/sachinawasthi32">
            <FaGithub size="20px" color="black" />
          </a>
          <a style={{ textDecoration: "none", marginLeft: "10px" }} target="_blank" href="https://www.hackerearth.com/@sachinawasthi32">
            <SiHackerearth size="20px" color="black" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;
