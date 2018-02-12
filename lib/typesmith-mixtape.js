var mixtape = require('mixtape');

module.exports = plugin;

function plugin(opts) {

  var plugin_defaults = {};

  return function(typesmith, done){
    var config = Object.assign({}, plugin_defaults, typesmith.config['typesmith-mixtape'], opts);

    mixtape.run(typesmith.config.types, config, typesmith.db, done);

  }
}