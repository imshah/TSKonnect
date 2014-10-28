var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        name: String,
        title: String,
        manager: String,
        phone: String,
        extension: String,
        imageFilePath: String
    }
);

var UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;