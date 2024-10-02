const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const newYears = "2024-10-02T17:40:58" 

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date() 

    const totalSeconds = (newYearsDate - currentDate) / 1000 

    if (totalSeconds < 0) {
        daysElement.innerHTML = 0;
        hoursElement.innerHTML = "00";
        minsElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
        clearInterval(countdownInterval); // Para a contagem regressiva
        return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24 
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysElement.innerHTML = days
    hoursElement.innerHTML = formatTime(hours) 
    minsElement.innerHTML = formatTime(mins)
    secondsElement.innerHTML = formatTime(seconds)
 }

 function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countdown()

 setInterval(countdown, 1000)
 
