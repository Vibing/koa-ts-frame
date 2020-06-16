const glob = require('glob');
const path = require('path');
const fs = require('fs');

const paths = [
  path.resolve(__dirname, '../app/**/*.ts'),
  path.resolve(__dirname, '../expands/**/*.ts'),
  path.resolve(__dirname, '../configs/**/*.ts')
];

paths.forEach(path => {
  glob(path, (err, files) => {
    if (err) throw '';
    files.forEach(i => {
      try {
        fs.unlinkSync(i.replace('.ts', '.js'));
      } catch (error) {}
    });
  });
});
