// potential data structure for the calculator app: https://ahfarmer.github.io/calculator/
const calcButtons = {
  currentValue: 0,
  digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  operations: [
    {
      value: '÷',
      operation: '/',
    },
    {
      value: 'x',
      operation: '*',
    },
    {
      value: '-',
      operation: '-',
    },
    {
      value: '+',
      operation: '+',
    },
    {
      value: '=',
      operation: '=',
    },
  ],
  actions: [
    {
      value: 'ac',
      action: 'clear',
    },
    {
      value: '+/-',
      action: 'change sign',
    },
    {
      value: '%',
      action: 'calculate percentage',
    },
  ],
};
