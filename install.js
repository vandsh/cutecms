var nano = require('nano')('http://localhost:5984');
var cute_db = nano.db.use('cute');
