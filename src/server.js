'use strict';

require('marko/node-require').install();
require('marko/express');

let express = require('express');
let template = require('./template.marko');

require('lasso').configure({
    require: {
        transforms: [
            {
                transform: "lasso-babel-transform",
                config: {
                    extensions: [
                        ".js",
                        ".es6"
                    ]
                }
            }
        ]
    },
    bundlingEnabled: false,
    fingerprintsEnabled: false,
    minify: false
});

let app = express();

app.use(require('lasso/middleware').serveStatic());

app.get('/', function(req, res) {
    res.marko(template, {});
});

app.listen(8080, function(err) {
    console.log('Listening on port 8080');

    if (process.send) {
        process.send('online');
    }
});