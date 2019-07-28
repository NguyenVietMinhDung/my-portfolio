/* eslint-disable import/no-extraneous-dependencies */
const sass = require('node-sass');

module.exports = (data, file) => sass.renderSync({ data, file }).css.toString('utf8');
