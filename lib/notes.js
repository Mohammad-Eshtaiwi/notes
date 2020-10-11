function Notes(input) {}
var uniqid = require("uniqid");
Notes.prototype.execute = function ({ action, payload }) {
    console.log("action", action);
    console.log(this[action](payload));
};
Notes.prototype.add = function (payload) {
    console.log({
        id: uniqid(),
        note: payload,
    });
};
module.exports.Notes = Notes;
