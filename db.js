if(process.env.NODE_ENV !== 'production') require('dotenv').config();

// Loading and initializing the library:
const pgp = require('pg-promise')({});

// Preparing the connection details:
const cn = 'postgres://ydiyucsirgjohz:25f3dcae2adf10bc838d93fe2bc9c4dbac9f59a5850156313c3d6f9f3290a6fd@ec2-54-235-114-242.compute-1.amazonaws.com:5432/daac4nui56rl1f?ssl=true';


// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;