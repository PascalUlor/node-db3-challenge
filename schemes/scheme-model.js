const knex = require("knex");
const config = require("../knexfile").development;
const db = knex(config);

function find() {
  let dataQuery = db("schemes");
  return dataQuery;
}

function findById(id) {
  let dataQuery = db("schemes");
  if (id) {
    return dataQuery.where({ id });
  }
}

const add = car => {
  return db("schemes")
    .insert(car)
    .then(id => get(...id).first());
};

const update = (id, car) => {
  return db("schemes")
    .where({ id })
    .update(car)
    .then(() => get(id));
};

const remove = id => {
  return db("schemes")
    .where({ id })
    .del();
};

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};
