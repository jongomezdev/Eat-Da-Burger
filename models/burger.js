const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.selectAll((err, data) => cb(err, data));
  },
  create: function (value, cb) {
    orm.insertOne(value, (err, data) => cb(err, data));
  },
  update: function (cb) {
    orm.updateOne(value, (err, data) => cb(err, data));
  },
  delete: function (cb) {
    orm.delete((err, data) => cb(err, data));
  },
};

module.exports = burger;
