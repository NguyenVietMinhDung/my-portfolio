import sass from 'node-sass';

module.exports = (data, file) => sass.renderSync({ data, file }).css.toString('utf8');
