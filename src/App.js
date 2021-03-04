import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BGImage from './img/home_bg_2.PNG';
import TopBar from './components/TopBar';
import FooterBar from './components/FooterBar';

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

      <FooterBar />
    </div>
  );
}

export default App;
