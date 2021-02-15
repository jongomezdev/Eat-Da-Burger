const util = require("util");
const connection = require("./connection.js");
const query = util.promisify(connection.query).bind(connection);
// Callback as the last argument, return a version that returns promises.
const orm = {
  selectAll: async (cb) => {
    try {
      const queryString = "SELECT * FROM burgers";
      const data = await query(queryString);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },

  insertOne: async function (value, cb) {
    try {
      const queryString = "INSERT INTO BURGERS (burger_name) VALUES (?)";
      const data = await query(queryString, value);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },

  updateOne: async function (value, cb) {
    try {
      let queryString = "UPDATE burgers SET devoured = 1 ";
      queryString += "WHERE burgers.id = ? ";
      const data = await query(queryString, value);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },

  delete: async function (cb) {
    try {
      let queryString = "DELETE FROM burgers ";
      queryString += "WHERE burgers.devoured = 1";
      const data = await query(queryString);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },
};

module.exports = orm;
