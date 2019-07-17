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

function findSteps(scheme_id) {
  if (scheme_id) {
    return db("steps as s")
      .join("schemes as sc", "s.scheme_id", "sc.id")
      .select("sc.scheme_name", "s.instructions", "s.step_number")
      .where({ scheme_id });
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
  remove,
  findSteps
};
