const { config } = require('./wdio.conf')
const path = require('path')

const edgeConfig = {
    ...config,
    services: ["msedgedriver"],
    capabilities:[{
        maxInstances: 2,
        browserName: "MicrosoftEdge"
    }],
    logLevel: 'warn',
    path: '/wd/hub'
};

exports.config = edgeConfig