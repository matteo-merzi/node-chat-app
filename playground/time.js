const moment = require('moment');
// UNIX epic: Jan 1st 1970 00:00:00 am

var date = moment();
date.add(20000, 'year').subtract(9, 'month');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));
