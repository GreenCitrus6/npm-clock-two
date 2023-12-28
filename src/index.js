import dayjs from 'dayjs/esm';
// importing dependencies
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

// extending dayjs to use utc and timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);


let currentTimezone = dayjs.tz.guess();
let currentTime = dayjs.tz(dayjs.utc(), currentTimezone);
// Constantly refresh clock


function updateClock() {
    currentTime = dayjs.tz(dayjs.utc(), currentTimezone);
    // console.log(currentTime);
    
    updateDoW();
    updateMonth();
    updateDate();
    updateYear();
    updateHours();
    updateMinutes();
    updateAmPm();
}

updateClock(); //run upon page initialization, sets clock asap before it continuously updates.
setInterval(() => updateClock(), 250); 

// Updating different parts of the clock face

// Set inner html for current timezone
document.querySelector('#timezone').innerHTML = `${currentTimezone}`;

function updateHours() {
    let currentHours;

    if (currentTime.hour() === 0) {
        //if it's midnight
        currentHours = '12';
    } else if (currentTime.hour() === 12) {
        //if it's noon
        currentHours = '12';
    } else if (currentTime.hour() < 12) {
        //if it's morning
        currentHours = `${currentTime.hour()}`;
    } else if (currentTime.hour() > 12) {
        //if it's afternoon
        currentHours = `${currentTime.hour() - 12}`
    }
    document.querySelector('#hour').innerHTML = currentHours;
}

function updateMinutes() {
    let currentMinutes = `${currentTime.minute()}`;
    if (currentMinutes.length < 2) {
        currentMinutes = '0' + currentMinutes;
    }
    document.querySelector('#minute').innerHTML = currentMinutes;
}

function updateAmPm() {
    let currentAmPm;
    if (currentTime.hour() < 12) {
        currentAmPm = 'AM';
    } else {
        currentAmPm = 'PM';
    }

    document.querySelector('#am-pm').innerHTML = currentAmPm;
}

function updateDoW() {
    let currentDoW;
    switch(currentTime.day()) {
        case 0: 
            currentDoW = "Sun";
            break;
        case 1:
            currentDoW = "Mon";
            break;
        case 2: 
            currentDoW = "Tue";
            break;
        case 3: 
            currentDoW = "Wed";
            break;
        case 4: 
            currentDoW = "Thur";
            break;
        case 5: 
            currentDoW = "Fri";
            break;
        case 6: 
            currentDoW = "Sat";
            break;
    }
    document.querySelector('#day').innerHTML = currentDoW;
}

function updateMonth() {
    let currentMonth;
    switch(currentTime.month()) {
        case 0: 
            currentMonth = "Jan";
            break;
        case 1: 
            currentMonth = "Feb";
            break;
        case 2: 
            currentMonth = "Mar";
            break;
        case 3:
            currentMonth = "Apr";
            break;
        case 4:
            currentMonth = "May";
            break;
        case 5: 
            currentMonth = "Jun";
            break;
        case 6: 
            currentMonth = "Jul";
            break;
        case 7: 
            currentMonth = "Aug";
            break;
        case 8: 
            currentMonth = "Sept";
            break;
        case 9: 
            currentMonth = "Oct";
            break;
        case 10: 
            currentMonth = "Nov";
            break;
        case 11:
            currentMonth = "Dec";
            break;
        default: 
            currentMonth = "Err";
            break;
    }
    document.querySelector('#month').innerHTML = currentMonth;
}

function updateDate() {
    let currentDate = `${currentTime.date()}`;
    document.querySelector('#date').innerHTML = currentDate;
}

function updateYear() {
    let currentYear = `${currentTime.year()}`;
    document.querySelector('#year').innerHTML = currentYear;
}