import { currentTimezone } from './clock.js';
import MicroModal from 'micromodal';

console.log(currentTimezone);

MicroModal.init({
    onShow: modal => {
        console.info(`${modal.id} is shown`);
        document.querySelector('#timezone-modal').classList.remove('hidden');
    },
    onClose: modal => {
        console.info(`${modal.id} is hidden`);
        document.querySelector('#timezone-modal').classList.add('hidden');
    }
});

// For every available time zone, create an option within #timezone-select

const timezoneArr = [];
// set current timezone to the top select
let timezoneHtml = `<option>${currentTimezone}</option>`;

for (const timeZone of Intl.supportedValuesOf('timeZone')) {
    timezoneArr.push(timeZone);
}

timezoneArr.map((timeZone, index) => {
    timezoneHtml += `<option id="" class="timezone-option">${timeZone}</option>`;
});

document.querySelector('#timezone-select').innerHTML = timezoneHtml;

document.querySelector('#apply-button').addEventListener('click', () => updateTimezone());

function updateTimezone() {
    let newTimezone = document.querySelector('#timezone-select').value
    console.log(`Timezone is set to ${newTimezone}`);
    currentTimezone = newTimezone
    document.querySelector('#timezone').innerHTML = `${newTimezone}`
}
