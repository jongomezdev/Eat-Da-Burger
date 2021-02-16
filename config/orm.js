const util = require("util");
const connection = require("../config/connection");
const query = util.promisify(connection.query).bind(connection);
// Callback as the last argument, return a version that returns promises.

const orm = {
  selectAll: async (cb) => {
    try {
      const searchQuery = "SELECT * FROM burgers";
      const data = await query(searchQuery);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },
  insertOne: async function (value, cb) {
    try {
      const createQuery = "INSERT INTO BURGERS (burger_name) VALUES (?)";
      const data = await query(createQuery, value);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },
  updateOne: async function (value, cb) {
    try {
      let updateQuery = "UPDATE burgers SET devoured = 1 ";
      updateQuery += "WHERE burgers.id = ? ";
      const data = await query(updateQuery, value);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },
  delete: async function (cb) {
    try {
      let deleteQuery = "DELETE FROM burgers ";
      deleteQuery += "WHERE burgers.devoured = 1";
      const data = await query(deleteQuery);
      cb(null, data);
    } catch (err) {
      cb(err);
    }
  },
};

module.exports = orm;
