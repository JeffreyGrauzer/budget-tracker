const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    "./index.html",
    "./assets/css/styles.css",
    "./assets/css/bootstrap.css",
    "./index.js",
    "./transaction.js",
    "./server.js"
]
self.addEventListener('install', function (e) {

})