var mixtape = require('mixtape');

module.exports = plugin;

function plugin(opts) {

  return function(typesmith, done){
    opts = opts || typesmith.config['typesmith-mixtape'] || {}

    mixtape.run(typesmith.config.types, opts, typesmith.db, done);

  }
}