document.addEventListener('DOMContentLoaded', () => {
	const timeoutdate = new Date('Mar 20 2023 15:00:00');
	
	const daysVal = document.querySelector('.time-count_days .time-count_val');
	const hoursVal = document.querySelector('.time-count_hours .time-count_val');
	const minutesVal = document.querySelector('.time-count_minutes .time-count_val');
	const secondsVal = document.querySelector('.time-count_seconds .time-count_val');

	const daysText = document.querySelector('.time-count_days .time-count_text');
	const hoursText = document.querySelector('.time-count_hours .time-count_text');
	const minutesText = document.querySelector('.time-count_minutes .time-count_text');
	const secondsText = document.querySelector('.time-count_seconds .time-count_text');

	function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = timeoutdate - now;
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});
