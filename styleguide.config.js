const path = require('path');

module.exports = {
  propsParser: require('react-docgen-typescript').parse,

  styleguideComponents: {
     Wrapper: path.join(__dirname, 'src', 'styleguidist', 'Wrapper'),
  },
};
