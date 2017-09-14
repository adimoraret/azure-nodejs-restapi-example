'use strict';

exports.getUsers = function(req, res) {
    const users = [
        {username: "gmalone", name:"Greyson Malone"},
        {username: "dboyd", name:"Drummond Boyd"}
    ];
    res.send(users);
};
