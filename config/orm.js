let connection = require("./connection.js");

let orm = {
    selectAll(cb) {
        let queryString = `SELECT * FROM burgers`
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne(burgerName, cb) {
        let queryString = `INSERT INTO burgers (burger_name) VALUES ("${burgerName}")`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne(id, cb) {
        let queryString = `UPDATE burgers SET devoured = 1 WHERE id = ${id}`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};

module.exports = orm;