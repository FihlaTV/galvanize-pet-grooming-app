'use strict';

const fs = require('fs');

describe("A proficient SQL developer", () => {
  context("should be able to perform basic SQL join queries:", () => {
    it("Lists all dogs by name and their owner's first and last name", () => {
      const sqlQuery = fs.readFileSync('src/01-dogs-owners.sql', 'utf8');

      return knex.raw(sqlQuery)
        .then(result => result.rows)
        .should.become([
          {
            "first_name": "Kyle",
            "last_name": "Coberly",
            "name": "Bixby",
          }, {
            "first_name": "CJ",
            "last_name": "Reynolds",
            "name": "Mesa",
          }, {
            "first_name": "CJ",
            "last_name": "Reynolds",
            "name": "Trixy",
          }, {
            "first_name": "Danny",
            "last_name": "Fritz",
            "name": "Penelope",
          }, {
            "first_name": "CJ",
            "last_name": "Reynolds",
            "name": "Iago",
          }
        ]);
    });

    it("Lists each dog's name with their breed. For dogs that are multiple breeds, each breed will return a row", () => {
      const sqlQuery = fs.readFileSync('src/02-dogs-breeds.sql', 'utf8');

      return knex.raw(sqlQuery)
        .then(result => result.rows)
        .should.become([
           {
             "name": "Chow Chow"
           }, {
             "name": "German Shepherd"
           }, {
             "name": "Jack Russell Terrier"
           }, {
             "name": "Chow Chow"
           }, {
             "name": "German Shepherd"
           }, {
             "name": "Black Lab"
           }, {
             "name": "Cat"
           }
        ]);
    });

  });

  context("should be able to build SQL queries with multiple join statements and where clauses:", () => {

    it("Lists Bixby's owner's first and last name, and the dates of all of their appointments", () => {
      const sqlQuery = fs.readFileSync('src/03-bixbys-appointments.sql', 'utf8');

      return knex.raw(sqlQuery)
        .then(result => result.rows)
        .should.become([
          {
            "appointment_date": '2016-02-18',
            "first_name": "Kyle",
            "last_name": "Coberly",
          }, {
            "appointment_date": '2016-02-18',
            "first_name": "Kyle",
            "last_name": "Coberly",
          }
        ])
    });

    it("Lists every breed that Martha has groomed. No breeds should repeat", () => {
      const sqlQuery = fs.readFileSync('src/04-groomed-by-martha.sql', 'utf8');

      return knex.raw(sqlQuery)
        .then(result => result.rows)
        .should.become([
          {
            "name": "Chow Chow"
          }, {
            "name": "German Shepherd"
          }
        ])
    });

    it("Lists *every* dog's name and any appointment dates they have", () => {
      const sqlQuery = fs.readFileSync('src/05-dog-appointments.sql', 'utf8');

      return knex.raw(sqlQuery)
        .then(result => result.rows)
        .should.become([
          {
            "appointment_date": '2016-02-18',
            "name": "Bixby",
          }, {
            "appointment_date": '2016-02-18',
            "name": "Bixby",
          }, {
            "appointment_date": '2016-02-18',
            "name": "Mesa",
          }, {
            "appointment_date": '2016-02-18',
            "name": "Trixy",
          }, {
            "appointment_date": '2016-02-18',
            "name": "Trixy",
          }, {
            "appointment_date": '2016-02-18',
            "name": "Penelope",
          }, {
            "appointment_date": null,
            "name": "Iago",
          }
        ]);
    });

  });
});
