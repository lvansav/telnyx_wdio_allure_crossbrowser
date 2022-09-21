const { config } = require('./wdio.conf')
const path = require('path')

const geckoConfig = {
    ...config,
    services: ["geckodriver"],
    capabilities:[{
        maxInstances: 2,
        browserName: "firefox"
    }],
    logLevel: 'warn',
    path: '/wd/hub'
};

exports.config = geckoConfig