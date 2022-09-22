const { config } = require('./wdio.conf')
const path = require('path')

const chromeConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities:[{
        maxInstances: 2,
        browserName: "chrome"
    }]
};

exports.config = chromeConfig