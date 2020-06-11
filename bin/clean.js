const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('./app');
const file = fs.statSync('./app/app.ts');
file.console.log(fs.statSync('./app/app.ts').isFile());
console.log(dirs);
