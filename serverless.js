const { getRouter } = require('stremio-addon-sdk');
const addon = require('./addon.js');

// Get the router from the addon
const router = getRouter(addon);

// Export as serverless function
module.exports = function(req, res) {
    router(req, res, function(err) {
        if (err) {
            console.error('Error:', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        res.statusCode = 404;
        res.end('Not Found');
    });
};
