const restRemover = (data) => {
  let result = data;
  for (let i = 0; i < result.length; ++i) {
    result = Number(result);
    result = result.length === 0 ? result.length - 1 : result;
  }
  return result;
};

const add = (value1, value2) => Number(value1) + Number(value2);

const substract = (value1, value2) => Number(value1) - Number(value2);

const multiply = (value1, value2) => (Number(value1) * Number(value2)).toFixed(3);

const divide = (value1, value2) => {
  if (Number(value2) !== 0) {
    return (Number(value1) / Number(value2)).toFixed(3);
  }
  return new Error();
};

const typeOfAction = ['add', 'substract', 'multiply', 'divide'];

module.exports = {
  restRemover,
  add,
  substract,
  multiply,
  divide,
  typeOfAction,
};
