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