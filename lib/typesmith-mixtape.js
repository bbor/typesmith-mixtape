var mixtape = require('mixtape');

module.exports = plugin;

/*
  This plugin sets up the type config, options and db as expected by mixtape,
  then asks mixtape to generate the static site.
*/

function plugin(opts) {

  return function(typesmith, done){
    opts = opts || typesmith.config['typesmith-mixtape'] || {}

    mixtape.run(typesmith.config.types, opts, typesmith.db, done);

  }
}