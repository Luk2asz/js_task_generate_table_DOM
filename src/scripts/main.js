'use strict';

const people = require('./lib/people');

const tbody = document.querySelector('tbody');

people.forEach(person => {
  const markup = `
  <td>${person.name}</td>
  <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>`;

  tbody.insertAdjacentHTML('beforeend', markup);
});
