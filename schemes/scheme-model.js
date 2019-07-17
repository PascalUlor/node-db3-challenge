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

const add = scheme => {
  return db("schemes")
    .insert(scheme)
    .then(id => findById(...id).first());
};

const update = (scheme, id) => {
  return db("schemes")
    .where({ id })
    .update(scheme)
    .then(() => findById(id));
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
