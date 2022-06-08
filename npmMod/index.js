// const chalk = require("chalk");
const validate = require("validator");
// console.log(chalk.red.inverse("false"));

const data = validate.isEmail("abhi@gmail.com");

console.log(data);
