## Test project for the Telnyx website

For start you need to follow next steps:

1. Download or fork this repo
2. Run `npm install`
3. Run `npm run wdio`

#### Content

The project has test cases for SIP Trunking product page and Number Lookup product page

#### Available scripts

For run on special browsers:

    npm run wdio:chrome
    npm run wdio:firefox

For run different suites:

    npm run wdio:number:lookup:product:page
    npm run wdio:sip:trunking:product:page

For run without any additional drivers:

    npm run wdio:selenium:standalone

For run in headless mode:

    npm run wdio:headless

If you want to use docker on local, you need to use next commands:

    docker-compose -f docker-compose-local.yml up
    npm run wdio:docker

The commands will start docker containers with Selenium Grid service, you can observe selenium session on the http://localhost:4444 (in basic)

If you want to run tests in the docker contaner to, just use:

    docker-compose up

