const express = require('express');

const router = express.Router();
const {
  restRemover,
  add,
  substract,
  multiply,
  divide,
  typeOfAction,
} = require('../actions/actions');

router
  .get('/:action/:value1/:value2', (req, res) => {
    const { action, value1, value2 } = req.params;
    let result = 0;

    if (value1.includes(',') || value2.includes(',')) {
      res.send('Wartość dziesiętna musi być zapisywana z wykorystaniem kropki!');
      return;
    }

    switch (action) {
      case 'add':
        result = add(value1, value2);
        break;
      case 'substract':
        result = substract(value1, value2);
        break;
      case 'multiply':
        result = restRemover(multiply(value1, value2));
        break;
      case 'divide':
        divide(value1, value2) instanceof Error === true ? res.send('Nie można dzielić przez 0!') : result = restRemover(divide(value1, value2));
        return;
      default:
        if (!typeOfAction.includes(action)) res.send('Wprowadzony typ działania jest niepoprawny!');
        return;
    }

    isNaN(result) === true ? res.send('Wprowadzona warość musi być liczbą!') : res.send(`Wynik to ${result}`);
  });

module.exports = { router };
