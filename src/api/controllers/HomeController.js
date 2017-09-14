'use strict';

exports.getHomePage = function(req, res) {
    const message = "Welcome to Sample Azure Rest Api written in NodeJs";
    const link = "<a href='/users'>See users here</a>";
    const htmlOutput = `${message}<br/>${link}`;
    res.send(htmlOutput);
};
