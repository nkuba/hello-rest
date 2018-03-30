const express           = require('express');
const os                = require('os');
const bodyParser        = require("body-parser");
const dbUtils           = require("./utils/DatabaseUtils");
const envUtils          = require("./utils/EnvUtils");

const router            = express.Router();
const app               = express();

const APP_PORT          = 3080;
const HOSTNAME          = os.hostname();
const APP_VERSION       = process.env.npm_package_version;

const DB_HOST           = process.env.DB_HOST || 'localhost';
const DB_PORT           = process.env.DB_PORT || 27017;
const MONGO_URL         = 'mongodb://' + DB_HOST + ':' + DB_PORT + '/';

// Add timestamp to log output
require('console-stamp')(console, '[HH:MM:ss.l]');

// Resources
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    "extended": false
}))

// Get Environment Variables
var envVars = envUtils.getEnvVars();

router.get('/', function (req, res) {
    console.log('Received request for path: ' + req.path)
    dbUtils.isDbConnected(MONGO_URL, dbStatus => {
        res.json({ hostname: HOSTNAME, version: APP_VERSION, db: { status: dbStatus }, envVars: envVars })
    })
})

console.log('Starting ' + process.env.npm_package_name + ' v. ' + APP_VERSION)
console.log('RESTful API started on host: ' + HOSTNAME + ', port: ' + APP_PORT)

app.use('/', router)
app.listen(APP_PORT)