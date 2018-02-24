var mixtape = require('mixtape');

module.exports = plugin;

function plugin(opts) {

  var plugin_defaults = {};

  return function(typesmith, done){
    var typesmithvalues = {}
    typesmithvalues.types = typesmith.config.types;
    var config = Object.assign({}, plugin_defaults, typesmith.config['typesmith-mixtape'], typesmithvalues, opts);

    mixtape.run(config, typesmith.db, done);

  }
}