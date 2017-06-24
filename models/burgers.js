let orm = require("../config/orm.js");

let burgers = {
    selectAll (cb) {
        orm.selectAll(function(res) {
        	cb(res);
        });
    },
    insertOne (burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
        	cb(res);
        });
    },
    updateOne (id, cb) {
        orm.updateOne(id, function(res) {
        	cb(res);
        });
    }
};

module.exports = burgers;