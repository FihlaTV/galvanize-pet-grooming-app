'use strict';

const fs = require('fs');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const spawn = require('child_process').spawn;
const connection = require('../src/db');

chai.should();
chai.use(chaiAsPromised);

global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.dbName = 'snoop_doggy_dog_test';
// global.dbURL = process.env.DATABASE_URL || 'postgres://localhost'

const test_seeds = fs.readFileSync('test_database.sql', 'utf8');
/*
  Before each `it` function runs (each "example") execute these steps in this order:
  - if the database exists, drop it using the `dropdb` shell command
  - create a new database using the `createdb` shell command
  - create a global `knex` variable that is connected to that database
*/
before(function () {
  return resetDb()
    .then(() => {
      global.knex = connection
      return knex.raw(test_seeds)
    })
});

// After each example, destroy the knex connection pool, so that future tests can reconnect
after(() => knex.destroy());

// Make a temporary connection to default table, then drop & create dbName
function resetDb() {
  return connection.raw(`DROP DATABASE IF EXISTS ${dbName};`)
    .then(result => connection.raw(`CREATE DATABASE ${dbName};`))
    .then(result => connection.destroy())
    .catch((err) => console.error)
}