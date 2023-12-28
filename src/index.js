import dayjs from 'dayjs/esm';
// importing dependencies
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

// extending dayjs to use utc and timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// Fetch Timezone
console.log(dayjs.tz.guess());