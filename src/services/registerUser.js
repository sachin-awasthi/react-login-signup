const mongoose = require('mongoose');

async function registerUser(uname, fname, pswd) {
    mongoose.connect('mongodb://localhost:27017/mernDB', { useNewUrlParser: true, useUnifiedTopology: true });

    var models = mongoose.connection.models;

    var schema = mongoose.Schema({
        ID: Number,
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

    var newUser = new mstr_user({
        ID: 0,
        U_NAME: uname,
        FULL_NAME: fname,
        PSWD: pswd
    });

    var message = "";

    await mstr_user.find({ U_NAME: uname }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (user.length > 0) {
            message = "Duplicate";
        } else {
            newUser.ID = user.length + 1;
            newUser.save();
            message = "Success";
        }
    });
    return message;
}

module.exports.registerUser = registerUser;