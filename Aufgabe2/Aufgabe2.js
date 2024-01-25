const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Bitte geben Sie die Temperatur in Celsius ein: ', (answer) => {
  const celsius = parseFloat(answer);
  const fahrenheit = celsius * 9/5 + 32;
  console.log(`${celsius} Grad Celsius entsprechen ${fahrenheit} Grad Fahrenheit.`);
  rl.close();
});