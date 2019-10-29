const path = require('path');

module.exports = {
  entry: './resume-jf.js',
  output: {
    filename: 'resume-jf.js',
    path: path.resolve(__dirname, 'dist')
  }
};
