const util = require("util");
const connection = require("./connection.js");
const query = util.promisify(connection.query).bind(connection);
// Callback as the last argument, and returns a version that returns promises.
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

  updateOne: async function (value, cb) {},

  delete: async function (cb) {},
};

module.exports = orm;
