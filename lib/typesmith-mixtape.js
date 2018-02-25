
var mixtape = require('mixtape');
var merge_options = require('merge-options');

module.exports = plugin;

function plugin(opts) {

  var plugin_defaults = {};

  return function(typesmith, done){
    var typesmithvalues = {}
    typesmithvalues.types = typesmith.config.types;
    var config = merge_options.call({concatArrays: true}, {}, plugin_defaults, typesmith.config['typesmith-mixtape'], typesmithvalues, opts);

    mixtape.run(config, typesmith.db, done);

  }
}