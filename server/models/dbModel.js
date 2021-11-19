const { Pool } = require("pg");

const PG_URI =
  "postgres://tziigvln:LNIGKag5PJ--_JVfY6KmrfqXXqB4hlH7@otto.db.elephantsql.com/tziigvln";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: function (queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};
