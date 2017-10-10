var rp = require('request-promise');
var $ = require('cheerio');
var CronJob = require('cron').CronJob;


var url = process.env.THRUK_ALERT_URL;
var username = process.env.THRUK_ALERT_USERNAME;
var password = process.env.THRUK_ALERT_PASSWORD;

if (typeof url === 'undefined')
    throw new Error('THRUK_ALERT_URL is undefined in env');

if (typeof username === 'undefined')
    throw new Error('THRUK_ALERT_USERNAME is undefined in env');

if (typeof password === 'undefined')
    throw new Error('THRUK_ALERT_PASSWORD is undefined in env');

new CronJob('* * * * * *', function() {
    rp(url)
        .then(function (htmlString) {
            console.log(htmlString);
        })
        .catch(function (err) {
            console.error(err);
        });
}, null, true, 'America/Los_Angeles');


