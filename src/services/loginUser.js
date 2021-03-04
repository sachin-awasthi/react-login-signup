const mongoose = require('mongoose');

async function loginUser(uname, pswd) {
    mongoose.connect('mongodb://localhost:27017/mernDB', { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    var models = mongoose.connection.models;

    var schema = mongoose.Schema({
        U_NAME: String,
        FULL_NAME: String,
        PSWD: String
    })

    var mstr_user;

    if (!models.mstr_users) {
        mstr_user = mongoose.model("mstr_users", schema);
    } else {
        mstr_user = models.mstr_users;
    }

    var userDetails = {};

    await mstr_user.find({ U_NAME: uname, PSWD: pswd }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (user.length > 0) {
            userDetails = user[0];
            message = "Success";
        } else {
            message = "Invalid credentials";
        }
    });

    return {
        userDetails: userDetails,
        message: message
    };
}

module.exports.loginUser = loginUser;