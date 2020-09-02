document.addEventListener('DOMContentLoaded', () => {
	let breakfast;
	let lunch;
	let dinner;

	function showCurrentTime() {
		const time = document.querySelector('.time');

		let fullTime = new Date();
		let hours = fullTime.getHours();
		let minutes = fullTime.getMinutes();
		let seconds = fullTime.getSeconds();
		let meridian = 'AM';

		//set hours
		if (hours >= 12) {
			meridian = 'PM';
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

	//set the eating time
	document.querySelector('#set-btn').onclick = () => {
		breakfast = document.querySelector('#breakfast').value;
		breakfast = +breakfast;
		lunch = document.querySelector('#lunch').value;
		lunch = +lunch;
		dinner = document.querySelector('#dinner').value;
		dinner = +dinner;
		let image = document.querySelector('#image');
		let time = new Date().getHours();

		if (time === breakfast) {
			image.src = 'images/b.jpg';
		} else if (time === lunch) {
			image.src = 'images/a.png';
		} else if (time === dinner) {
			image.src = 'images/c.jpg';
		} else {
			image.src = 'images/d.jpg';
		}
	};

	//incrementing 1s every 1s yeah
	var oneSecond = 1000;
	setInterval(showCurrentTime, oneSecond);
});
