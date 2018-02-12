# typesmith-mixtape

This plug-in for [typesmith](https://www.github.com/bbor/typesmith) uses [mixtape](https://www.github.com/bbor/mixtape) to generate an HTML system for the typesmith database.

You'll usually want to put this at the end of your typesmith pipeline, so that your mixtape results will show all the changes your pipeline applied to your database along the way.

## Options

none

## Usage

As any other `typesmith` plugin, require it in your module and pass it to `typesmith.use()`:

```js
var typesmith = require('typesmith');
var writeHtml = require('typesmith-mixtape');
... // require other plugins

var config = {
	... // config options and type info goes here
}

typesmith(config)
  .use(readJson())
  .use(readMarkdown())
  .use(autoparent())
  .use(subgroup())
  .use(writeJson())
  .use(writeHtml())
  .run( function(errmsg) { if (errmsg) { console.log("Error: " + errmsg); } console.log('finished!'); } );
```
