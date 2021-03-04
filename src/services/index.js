const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { loginUser } = require('./loginUser');
const { registerUser } = require('./registerUser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/loginUser", async (req, res) => {
    const uname = req.query.userNameInput;
    const pswd = req.query.passwordInput;
    var logUser = await loginUser(uname, pswd);

    if (logUser) {
        res.send(JSON.stringify(logUser));
    } else {
        console.log("Error");
    }
});

app.post("/registerUser", async (req, res) => {
    const uname = req.body.userNameInput;
    const fname = req.body.fullNameInput;
    const pswd = req.body.passwordInput;
    var regUser = await registerUser(uname, fname, pswd);

    if (regUser) {
        res.send(JSON.stringify(regUser));
    } else {
        console.log("Error");
    }
});

app.listen(5000, () => {
    console.log("Server started at 5000!");
});