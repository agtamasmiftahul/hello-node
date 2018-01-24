//Require packages => install with npm i or yarn install
const chalk = require(`chalk`);
const r = require(`ramda`);

//Color of text
const primaryText = chalk.bold.blue;
const dangerText = chalk.bold.red;
const warningText = chalk.bold.yellow;
const successText = chalk.bold.green;

//Print text
const log = console.log;

//Number will be used
let a = 12;
let b = 4;
let c = 5;

//Print result of mathematical operation
log(`The result from ${dangerText(a)} + ${dangerText(b)} is`, primaryText(r.add(a, b)));
log(`\n`);
log(`The result from ${warningText(b)} - ${warningText(c)} is`, primaryText(r.subtract(b, c)));
log(`\n`);
log(`The result from ${dangerText(b)} x ${dangerText(c)} is`, successText(r.multiply(b, c)));
log(`\n`);
log(`The result from ${warningText(a)} / ${warningText(b)} is`, successText(r.divide(a, b)));