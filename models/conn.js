const pgp = require('pg-promise') ({
    query: function(e) {
        console.log('QUERY:', e.query)
    }
});

const options = {
    host: 'localhost',
    database: 'rank'
};

// const whatever = {
//     host: 'localhost',
//     database: 'ranking_system'
// };

const db1 = pgp(options);
// const db2 = pgp(whatever);   ,db2

module.exports = db1;
