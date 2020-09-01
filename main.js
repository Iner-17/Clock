document.addEventListener('DOMContentLoaded', () => {
    //set time

    // let wakeuptime = 7;
    // let noon = 12;
    // let lunchtime = 12;
    // let naptime = lunchtime + 2;
    // let partytime;
    // let evening = 18;

    function showCurrentTime() {
        const time = document.querySelector('.time');

        let fullTime = new Date();
        let hours = fullTime.getHours();
        let minutes = fullTime.getMinutes()
        let seconds = fullTime.getSeconds()
        let meridian = 'AM';

        //set hours
        if (hours >= 12) {
            meridian = 'PM'
        }

        if (hours > 12) {
            hours = hours - 12;
        }
        //set minutes
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        //set seconds
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        time.textContent = `${hours}:${minutes}:${seconds} ${meridian}!!`;
    }
    showCurrentTime();

    function updateClock() {
        let image = document.querySelector('#image');
        let time = new Date().getHours()

        if (time == 8) {
            image.src = 'images/b.jpg';
        } else if (time == 12) {
            image.src = 'images/a.png';
        } else if (time == 19) {
            image.src = 'images/c.jpg';
        } else {
            image.src = 'images/d.jpg';
        }
    }
    updateClock();

    var oneSecond = 1000;
    setInterval(showCurrentTime, oneSecond);
});