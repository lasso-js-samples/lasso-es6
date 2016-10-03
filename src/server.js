'use strict';

import express from 'express';
import template from './template.marko';
import lasso from 'lasso';
import lassoMiddleware from 'lasso/middleware';

lasso.configure({
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

app.use(lassoMiddleware.serveStatic());

app.get('/', function(req, res) {
    res.marko(template, {});
});

app.listen(8080, function(err) {
    console.log('Listening on port 8080');

    if (process.send) {
        process.send('online');
    }
});