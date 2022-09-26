const { config } = require('./wdio.conf')

const seleniumStandConf = {
    ...config,
    maxInstances: 6,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args:[
                '--headless'
            ]}
    },
    {
        browserName: 'firefox',
        maxInstances: 2,
        'moz:firefoxOptions': {
            args:[
                "-headless"
            ]
        }
    },
    {
        browserName: "MicrosoftEdge",
        maxInstances: 2,
        "ms:edgeOptions": {
            args:[
                "-headless"
            ]
        }
    }],
    services: ['selenium-standalone']
}

exports.config = seleniumStandConf